import Heading from "@/components/shared/Heading";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Events() {
  return (
    <SafeAreaView className="bg-background flex-1 p-4">
      <Heading>Events</Heading>
    </SafeAreaView>
  );
}
