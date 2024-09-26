import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager, focusManager } from "@tanstack/react-query";
import { AppState, Platform } from "react-native";
import type { AppStateStatus } from "react-native";
import { ReactNode } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { NotifyOnChangeProps } from "@tanstack/query-core";

// Initialize the QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000, // 30 minutes
      retry: 6,
    },
  },
});

// Manage online state with NetInfo
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

// Function to handle app state changes
function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

// Hook for handling navigation focus and notifications
export function useFocusNotifyOnChangeProps(
  notifyOnChangeProps?: NotifyOnChangeProps
) {
  const focusedRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  return () => {
    if (!focusedRef.current) {
      return [];
    }

    if (typeof notifyOnChangeProps === "function") {
      return notifyOnChangeProps();
    }

    return notifyOnChangeProps;
  };
}

// The main Providers component
export default function Providers({ children }: { children: ReactNode }) {
  // Add focus and app state listener on mount
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);
    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
