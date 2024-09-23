import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import {
  Svg,
  Path,
  Defs,
  Stop,
  Mask,
  Rect,
  LinearGradient,
} from "react-native-svg";
import StyledText from "../shared/StyledText";
import Heading from "../shared/Heading";
import LottieView from "lottie-react-native";

type FeedProps = {
  topic: string;
  description: string;
  isActionBtn?: boolean;
  isBtnText?: boolean;
  isBorder?: boolean;
  lottieSrc: any;
  activeIndex: number;
  currentIndex: number;
};

export default function Feed({
  topic,
  description,
  isActionBtn = false,
  isBtnText = false,
  isBorder = false,
  lottieSrc,
  activeIndex,
  currentIndex,
}: FeedProps) {
  const animation = useRef<LottieView>(null);

  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  // Only run shimmer for the active feed
  useEffect(() => {
    if (activeIndex === currentIndex) {
      startShimmerAnimation();
    }

    return () => {
      shimmerAnimation.stopAnimation();
    };
  }, [activeIndex, currentIndex]); // Listen to changes in activeIndex

  const startShimmerAnimation = () => {
    shimmerAnimation.setValue(0);
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 2450,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-306, 306], // Adjusted for SVG width
  });

  return (
    <View style={styles.container} className="-mb-8">
      {/* Custom box svg */}
      <Svg width={306} height={186} viewBox="0 0 327 186">
        <Defs>
          <LinearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <Stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <Stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </LinearGradient>
          <Mask id="mask">
            <Path
              d="M21.8494 0.5H164.151C168.153 0.5 171.032 0.502358 173.362 0.657026C175.747 0.815662 177.815 1.14275 179.744 1.81961C183.953 3.31065 187.439 6.04651 189.681 9.70898C190.737 11.3711 191.379 13.2087 191.796 15.4148C192.205 17.5798 192.402 20.2512 192.499 23.9736L192.5 24.0384V281.962C192.5 286.885 192.498 290.508 192.234 293.335C191.975 296.107 191.477 298.134 190.634 299.957C188.814 303.884 185.384 306.814 181.193 307.955C179.263 308.524 177.165 308.68 174.344 308.725C171.477 308.77 167.803 308.771 162.807 308.771H23.1929C18.1966 308.771 14.5233 308.77 11.6559 308.725C8.83469 308.68 6.73689 308.524 4.80714 307.955C0.615669 306.814 -2.81375 303.884 -4.63387 299.957C-5.47688 298.134 -5.97516 296.107 -6.23407 293.335C-6.49809 290.508 -6.5 286.885 -6.5 281.962V24.0384C-6.5 19.1155 -6.49809 15.4923 -6.23407 12.6649C-5.97516 9.89284 -5.47688 7.86571 -4.63387 6.04346C-2.81375 2.11585 0.615669 -0.814108 4.80714 -1.95508C6.73689 -2.52433 8.83469 -2.67955 11.6559 -2.72516C14.5233 -2.77022 18.1966 -2.77083 23.1929 -2.77083L21.8494 0.5Z"
              fill="white"
            />
          </Mask>
        </Defs>
        <Path
          d="M38.4 0.5H185.313C191.793 0.5 194.946 0.503598 197.735 1.20045C203.336 2.59934 208.226 6.01066 211.472 10.7839C213.089 13.1616 214.181 16.119 216.419 22.2009L216.451 22.2887C218.648 28.2621 219.782 31.3432 221.476 33.8351C224.861 38.8114 229.959 42.3679 235.798 43.8263C238.721 44.5566 242.004 44.5566 248.369 44.5566H248.463H288.6C295.329 44.5566 300.345 44.557 304.322 44.8819C308.294 45.2064 311.184 45.8519 313.669 47.1179C318.091 49.371 321.686 52.966 323.939 57.3878C325.205 59.8725 325.85 62.763 326.175 66.7342C326.5 70.7111 326.5 75.7277 326.5 82.4566V124.6C326.5 131.329 326.5 136.345 326.175 140.322C325.85 144.294 325.205 147.184 323.939 149.669C321.686 154.091 318.091 157.686 313.669 159.939C311.184 161.205 308.294 161.85 304.322 162.175C300.345 162.5 295.329 162.5 288.6 162.5H38.4C31.6711 162.5 26.6545 162.5 22.6776 162.175C18.7064 161.85 15.8159 161.205 13.3312 159.939C8.90941 157.686 5.31437 154.091 3.06135 149.669C1.79533 147.184 1.14977 144.294 0.82532 140.322C0.500389 136.345 0.5 131.329 0.5 124.6V38.4C0.5 31.6711 0.500389 26.6545 0.82532 22.6776C1.14977 18.7064 1.79533 15.8159 3.06135 13.3312C5.31437 8.90941 8.90941 5.31437 13.3312 3.06135C15.8159 1.79533 18.7064 1.14977 22.6776 0.82532C26.6545 0.500389 31.6711 0.5 38.4 0.5Z"
          fill="#192242"
          fillOpacity="0.7"
          stroke={isBorder ? "#0094FF" : ""}
          strokeWidth={isBorder ? 0 : 0}
        />
      </Svg>

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX }],
          opacity: 0.3,
        }}
      >
        <Svg width={306} height={186} viewBox="0 0 327 186">
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#shimmer)"
            mask="url(#mask)"
          />
        </Svg>
      </Animated.View>

      {/* Box content */}

      <View className="absolute top-0 left-0 z-10 flex flex-col p-4 h-fit w-full text-xl">
        <Heading className="text-yellow" size="base">
          {topic}
        </Heading>
        <StyledText className="w-[60%] mt-1">{description}</StyledText>

        {/* Action Btn */}

        {isActionBtn && (
          <TouchableOpacity className="mt-6 flex h-9 w-20 items-center justify-center rounded-full bg-[#0094FF]">
            <Text className="text-sm text-white font-mulishBold">OPEN</Text>
          </TouchableOpacity>
        )}

        {/* Send btn */}

        <TouchableOpacity
          className="absolute right-7 top-2 ml-1 flex h-[32px] w-[86px] items-center justify-center rounded-full border-gray-light border"
          style={styles.actionBtn}
        >
          {isBtnText ? (
            <View className="flex-row items-center">
              <Text className="text-sm font-medium text-white">Send</Text>
              <Text className="text-sm">👋</Text>
            </View>
          ) : (
            <Text className="-ml-1 -mt-1 text-sm">👋</Text>
          )}
        </TouchableOpacity>

        <View className="absolute right-10 bottom-6">
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 70,
              height: 70,
            }}
            source={lottieSrc}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 186,
    position: "relative",
  },
  actionBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
