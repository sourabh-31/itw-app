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
  const maxDots = 6; // Maximum number of dots
  const getDotSizes = (dotsCount: number) => {
    if (dotsCount === 1) return [6]; // Single dot
    if (dotsCount === 2) return [6, 6]; // Two equal-sized dots
    if (dotsCount === 3) return [4, 4, 6]; // Small, Big, Small
    if (dotsCount === 4) return [4, 6, 4, 6]; // Small, Big, Big, Small
    if (dotsCount === 5) return [3, 5, 3, 5, 5]; // Dynamic for more items
    return [3, 5, 6, 3, 5, 6]; // Default for max dots (6)
  };

  const getDotsCount = () => {
    if (count <= 2) return count - 1; // 1 dot for count = 2
    return Math.min(count - 1, maxDots); // Up to 6 dots
  };

  const leftDotsCount = Math.floor(getDotsCount() / 2);
  const rightDotsCount = getDotsCount() - leftDotsCount;

  const dotSizes = getDotSizes(getDotsCount());

  const renderDots = (side: "left" | "right", dotsCount: number) => {
    return Array.from({ length: dotsCount }).map((_, index) => {
      const size =
        side === "left"
          ? dotSizes[index] // Get size from left for "left" side
          : dotSizes[dotSizes.length - 1 - index]; // Get size from right for "right" side
      return (
        <View
          key={`${side}-${index}`}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#2E395F",
            marginHorizontal: 2,
          }}
        />
      );
    });
  };

  return (
    <View className="flex-row justify-center items-center">
      {count > 2 && renderDots("left", leftDotsCount)}
      <View className="justify-center items-center bg-[#404C78] mx-[2] px-1 rounded-xl">
        <Text className="text-[8px] font-mulishBold">
          {`${activeIndex + 1}/${count}`}
        </Text>
      </View>
      {(count === 2 || count > 2) && renderDots("right", rightDotsCount)}
    </View>
  );
};

// News Feed Section
export default function NewsFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const newsData = data?.news?.slice(0, 3) ?? [];

  // Set the item width to 80% of the screen width
  const itemWidth = width * 0.8;
  const visibleNextItem = width * 0.2; // 20% of the next item should be visible

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
              defaultIndex={0}
              panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
              }}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.95,
                parallaxScrollingOffset: 50,
              }}
              style={{
                width: width,
                height: 160,
                justifyContent: "center",
                alignItems: "center",
              }}
              onProgressChange={(_, absoluteProgress) => {
                const index = Math.round(absoluteProgress) % newsData.length;
                setActiveIndex(index);
              }}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: itemWidth,
                    marginRight: visibleNextItem,
                  }}
                >
                  <Feed
                    topic={item.title}
                    description={item.description}
                    isActionBtn={item.newsType === "CALENDAR"}
                    isBtnText={item.newsType === "GENERAL"}
                    lottieSrc={item.imageUrl}
                    isBorder={item.newsType === "CALENDAR"}
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
            count={newsData.length ?? 0}
          />
        </View>
      </Container>
    </View>
  );
}
