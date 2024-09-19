import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { Link } from "@react-navigation/native";
import Heading from "./Heading";

interface TilePropsType {
  name: string;
  details: string;
  imgUrl: string;
  isShowAll?: boolean;
  isLast?: boolean;
  isOverflow?: boolean;
}

export default function Tile({
  name,
  details,
  imgUrl,
  isShowAll = false,
  isLast = false,
  isOverflow = false,
}: TilePropsType) {
  return (
    <View className="flex-row items-center my-2">
      {/* Image */}
      <View className="z-20">
        {!isShowAll ? (
          <Image
            source={imgUrl as ImageSourcePropType | undefined}
            className="rounded-full h-16 w-16"
          />
        ) : (
          <View className="bg-[#1a2d68] rounded-full p-3">
            <Image source={imgUrl as ImageSourcePropType | undefined} />
          </View>
        )}
      </View>

      {/* Schedule */}
      <View
        className={`rounded-full flex-row items-center justify-between py-5 pl-10 flex-1 -ml-8 ${
          isOverflow ? "-mr-10 pr-16" : "mr-0 pr-4"
        }`}
        style={isLast ? styles.customBg : styles.defaultBg}
      >
        <View>
          {/* Schedule Details */}
          <Heading size="large">{name}</Heading>
          <Text className="text-white font-mulishSemiBold">{details}</Text>
        </View>

        {/* CTA Btn */}
        <Link to="/" className="mt-auto">
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/png/chevron-right-alt.png")}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customBg: {
    backgroundColor: "rgba(223, 235, 255, 0.2)",
  },
  defaultBg: {
    backgroundColor: "#1E2029",
  },
});
