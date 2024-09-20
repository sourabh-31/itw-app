import React, { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import Container from "../shared/Container";
import Feed from "./Feed";
import Carousel from "react-native-reanimated-carousel";
import { FeedItems } from "@/data/home.data";

const { width } = Dimensions.get("window");

// Indicator Dots

const PaginationBar = ({
  activeIndex,
  count,
}: {
  activeIndex: number;
  count: number;
}) => {
  const dotSizes = [3, 5, 6, 6, 5, 3];

  return (
    <View className="flex-row justify-center items-center">
      {dotSizes.slice(0, 3).map((size, index) => (
        <View
          key={index}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#2E395F",
            marginHorizontal: 2,
          }}
        />
      ))}
      <View className="justify-center items-center bg-[#404C78] mx-[2] px-1 rounded-xl">
        <Text className="text-[8px] font-mulishBold">
          {`${activeIndex + 1}/${count}`}
        </Text>
      </View>
      {dotSizes.slice(3).map((size, index) => (
        <View
          key={index + 3}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#2E395F",
            marginHorizontal: 2,
          }}
        />
      ))}
    </View>
  );
};

// News Feed Section

export default function NewsFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="mt-8">
      <Container title="News Feed" isLinkUnderline={false}>
        <View className="mt-3">
          <Carousel
            loop
            autoPlay={true}
            autoPlayInterval={2500}
            scrollAnimationDuration={1000}
            width={width}
            height={160}
            data={FeedItems}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <View className="pl-4">
                <Feed
                  topic={item.topic}
                  description={item.description}
                  isActionBtn={item.isActionBtn}
                  isBorder={item.isBorder}
                  isBtnText={item.isBtnText}
                  lottieSrc={item.lottieSrc}
                />
              </View>
            )}
          />
        </View>

        {/* Indicator */}

        <View
          style={{
            marginTop: 16,
            bottom: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <PaginationBar activeIndex={activeIndex} count={FeedItems.length} />
        </View>
      </Container>
    </View>
  );
}
