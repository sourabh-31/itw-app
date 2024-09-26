import React, { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import Container from "../shared/Container";
import Carousel from "react-native-reanimated-carousel";
import Feed from "../shared/Feed";
import { useBrandsAndTeam } from "@/hooks/useHomeApi";
import FeedSkeleton from "../shared/FeedSkeleton";

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

  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const newsData = data?.news?.slice(0, 3) ?? [];

  return (
    <View className="mt-8">
      <Container title="News Feed" isLinkUnderline={false}>
        {!isLoading && !isError ? (
          <View className="mt-3">
            <Carousel
              loop
              autoPlay={true}
              autoPlayInterval={2500}
              scrollAnimationDuration={1000}
              width={width}
              height={160}
              data={newsData}
              onSnapToItem={(index) => setActiveIndex(index)}
              renderItem={({ item }) => (
                <View className="pl-4">
                  <Feed
                    topic={item.title}
                    description={item.description}
                    isActionBtn={item.newsType === "CALENDAR"}
                    isBtnText={item.newsType === "GENERAL"}
                    lottieSrc={item.imageUrl}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <View className="mt-3 ml-4 mb-2">
            <FeedSkeleton />
          </View>
        )}

        {/* Indicator */}

        <View
          style={{
            marginTop: 16,
            bottom: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <PaginationBar
            activeIndex={activeIndex}
            count={newsData?.length ?? 0}
          />
        </View>
      </Container>
    </View>
  );
}
