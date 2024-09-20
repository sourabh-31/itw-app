import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Tabs, useRouter, usePathname, Href } from "expo-router";
import {
  CalendarSearch,
  Home,
  More,
  Tag2,
  TagUser,
} from "iconsax-react-native";

const CustomTabBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const routes = [
    { name: "/", label: "Home", icon: Home },
    { name: "/events", label: "Events", icon: CalendarSearch },
    { name: "/brands", label: "Brands", icon: Tag2 },
    { name: "/team", label: "Team", icon: TagUser },
    { name: "/others", label: "Others", icon: More },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => (
        <View className="px-1 py-[6] bg-[#242632]">
          <View className="flex-row bg-[#000000] rounded-full py-1 px-[5] justify-between">
            {/* Tab Bar Container */}
            {routes.map((route, index) => {
              const isFocused = currentPath === route.name;
              const IconComponent = route.icon;

              const onPress = () => {
                router.push(route.name as Href<string | object>);
              };

              return (
                <TouchableOpacity
                  key={route.name}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  onPress={onPress}
                  className={`items-center justify-center rounded-full ${
                    isFocused
                      ? "bg-[#FFE58E] flex-row px-4"
                      : "bg-[#242632] w-[52] h-[52]"
                  }`}
                >
                  <View
                    className={`items-center ${
                      isFocused ? "flex-row gap-1" : ""
                    }`}
                  >
                    <IconComponent
                      size={isFocused ? 20 : 24}
                      color={isFocused ? "#000000" : "#ffffff"}
                      variant="Bold"
                    />

                    <Text
                      className={`${
                        isFocused
                          ? "text-[16px] font-mulishSemiBold"
                          : "text-[10px] font-mulish"
                      }`}
                      style={{
                        color: isFocused ? "#000000" : "#ffffff",
                      }}
                    >
                      {route.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="events" options={{ title: "Events" }} />
      <Tabs.Screen name="brands" options={{ title: "Brands" }} />
      <Tabs.Screen name="team" options={{ title: "Team" }} />
      <Tabs.Screen name="others" options={{ title: "Others" }} />
    </Tabs>
  );
};

export default CustomTabBar;
