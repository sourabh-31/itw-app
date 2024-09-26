import React from "react";
import { StyleSheet, View } from "react-native";
import { Skeleton } from "moti/skeleton";

export default function CardSkeleton() {
  const skeletonCommonProps = {
    colorMode: "dark",
    transition: {
      type: "timing",
      duration: 2000,
    },
  } as const;

  return (
    <View className="flex-1 w-[325] rounded-2xl p-5" style={styles.bgColor}>
      {/* Card Header */}
      <View className="flex-row justify-between mb-5">
        <View className="rounded-full">
          <Skeleton
            width={50}
            height={50}
            radius={"round"}
            {...skeletonCommonProps}
          />
        </View>

        <View className="rounded-full">
          <Skeleton
            width={50}
            height={50}
            radius={"round"}
            {...skeletonCommonProps}
          />
        </View>
      </View>

      {/* Card Name */}
      <View className="mb-5 w-[152px] rounded-lg">
        <Skeleton width={150} height={24} {...skeletonCommonProps} />
      </View>

      {/* Card Content */}
      <View className="mb-5 w-[282px] rounded-lg">
        <Skeleton width={280} height={55} {...skeletonCommonProps} />
      </View>

      <View className="mb-5 w-[282px] rounded-lg">
        <Skeleton width={280} height={55} {...skeletonCommonProps} />
      </View>

      {/* Button */}
      <View className="mt-4 mb-2 w-[282px] rounded-full">
        <Skeleton
          width={280}
          height={55}
          radius={"round"}
          {...skeletonCommonProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: "rgba(128, 128, 128, 0.2)",
  },
});
