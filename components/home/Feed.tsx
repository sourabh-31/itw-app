import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
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
};

export default function Feed({
  topic,
  description,
  isActionBtn = false,
  isBtnText = false,
  isBorder = false,
  lottieSrc,
}: FeedProps) {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container} className="-mb-8">
      {/* Custom box svg */}

      <Svg width={306} height={186} viewBox="0 0 327 186">
        <Path
          d="M38.4 0.5H185.313C191.793 0.5 194.946 0.503598 197.735 1.20045C203.336 2.59934 208.226 6.01066 211.472 10.7839C213.089 13.1616 214.181 16.119 216.419 22.2009L216.451 22.2887C218.648 28.2621 219.782 31.3432 221.476 33.8351C224.861 38.8114 229.959 42.3679 235.798 43.8263C238.721 44.5566 242.004 44.5566 248.369 44.5566H248.463H288.6C295.329 44.5566 300.345 44.557 304.322 44.8819C308.294 45.2064 311.184 45.8519 313.669 47.1179C318.091 49.371 321.686 52.966 323.939 57.3878C325.205 59.8725 325.85 62.763 326.175 66.7342C326.5 70.7111 326.5 75.7277 326.5 82.4566V124.6C326.5 131.329 326.5 136.345 326.175 140.322C325.85 144.294 325.205 147.184 323.939 149.669C321.686 154.091 318.091 157.686 313.669 159.939C311.184 161.205 308.294 161.85 304.322 162.175C300.345 162.5 295.329 162.5 288.6 162.5H38.4C31.6711 162.5 26.6545 162.5 22.6776 162.175C18.7064 161.85 15.8159 161.205 13.3312 159.939C8.90941 157.686 5.31437 154.091 3.06135 149.669C1.79533 147.184 1.14977 144.294 0.82532 140.322C0.500389 136.345 0.5 131.329 0.5 124.6V38.4C0.5 31.6711 0.500389 26.6545 0.82532 22.6776C1.14977 18.7064 1.79533 15.8159 3.06135 13.3312C5.31437 8.90941 8.90941 5.31437 13.3312 3.06135C15.8159 1.79533 18.7064 1.14977 22.6776 0.82532C26.6545 0.500389 31.6711 0.5 38.4 0.5Z"
          fill="#192242"
          fillOpacity="0.7"
          stroke={isBorder ? "#0094FF" : ""}
          strokeWidth={isBorder ? 1 : 0}
        />
      </Svg>

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
