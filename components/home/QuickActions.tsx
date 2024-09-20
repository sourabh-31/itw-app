import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Heading from "../shared/Heading";
import { QuickActionsData } from "@/data/home.data";

const getImageSource = (imgSrc: string) => {
  switch (imgSrc) {
    case "@/assets/images/png/quickAction/request-icon.png":
      return require("@/assets/images/png/quickAction/request-icon.png");
    case "@/assets/images/png/quickAction/brand-icon.png":
      return require("@/assets/images/png/quickAction/assigned-icon.png");
    case "@/assets/images/png/quickAction/events-icon.png":
      return require("@/assets/images/png/quickAction/events-icon.png");
    case "@/assets/images/png/quickAction/assigned-icon.png":
      return require("@/assets/images/png/quickAction/assigned-icon.png");
    default:
      return null;
  }
};

export default function QuickActions() {
  return (
    <View className="mt-2">
      <Heading className="pl-4">Quick Actions</Heading>
      <FlatList
        className="mt-4"
        horizontal={true}
        data={QuickActionsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        renderItem={({ item }) => (
          <View className="mx-2 flex-col items-center">
            <Image source={getImageSource(item.imgSrc)} />
            <Text className="text-white mt-2 font-mulish text-xs">
              {item.text}
            </Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
