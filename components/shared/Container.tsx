import { Text, View } from "react-native";
import Heading from "./Heading";
import { Link } from "expo-router";
import clsx from "clsx";
import { ReactNode } from "react";

type ContainerProps = {
  title: string;
  isLinkUnderline?: boolean;
  children: ReactNode;
  isTag?: boolean;
  tagClassName?: string;
  tagName?: string;
  length?: number;
};

export default function Container({
  title,
  isLinkUnderline = true,
  children,
  isTag = false,
  tagClassName,
  tagName,
  length = 0,
}: ContainerProps) {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View className="flex-row items-center gap-1">
          <Heading>{title}</Heading>
          {isTag && (
            <Text
              className={`text-white text-sm font-mulishMedium px-2 py-1 rounded-lg ${tagClassName}`}
            >
              {tagName}
            </Text>
          )}
        </View>

        <View className="flex-row items-center gap-1">
          <Link
            href="/(tabs)/"
            className={clsx(
              "text-white font-mulish",
              isLinkUnderline && "underline"
            )}
          >
            Show all
          </Link>
          {length !== 0 && (
            <View className="bg-[#a82142] rounded-full w-[18] h-[18] items-center justify-center">
              <Text className="text-white text-[10px] font-mulishSemiBold">
                {length || 0}
              </Text>
            </View>
          )}
        </View>
      </View>

      {children}
    </View>
  );
}
