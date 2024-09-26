import React, { ReactNode } from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Link } from "@react-navigation/native";
import { truncate } from "lodash";

const Card = ({
  children,
  bgColor,
}: {
  children: ReactNode;
  bgColor: string;
}) => {
  return (
    <View
      className="flex-1 w-[325] rounded-3xl p-3 mx-2"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </View>
  );
};

const CardHeader = ({
  linkHref = "/",
  icon,
}: {
  linkHref?: string;
  icon?: string;
}) => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="rounded-full p-2 bg-[#242632]">
        <Image source={{ uri: icon }} className="w-[34px] h-[34px]" />
      </View>
      <Link to={linkHref}>
        <View className="rounded-full bg-white p-3">
          <Image
            source={require("@/assets/images/png/arrow-up-right.png")}
            className="w-6 h-6"
          />
        </View>
      </Link>
    </View>
  );
};

const CardName = ({ name }: { name: string }) => {
  return (
    <Text className="mb-4 mt-2 font-recoletaAlt text-xl text-primary-300">
      {name}
    </Text>
  );
};

const CardContent = ({
  title,
  keyword1,
  keyword2,
}: {
  title: string;
  keyword1: string;
  keyword2: string;
}) => {
  return (
    <View className="flex-row items-center rounded-full bg-[#f7fbf7]">
      <View className="flex-1 px-6 py-2">
        <Text className="text-sm mb-1 font-mulishBold">
          {truncate(title, { length: 25 })}
        </Text>
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center rounded-full bg-[#FF6161] px-2 py-[2px]">
            <Image
              source={require("@/assets/images/png/clock.png")}
              className="w-3 h-3 mr-[2px]"
            />
            <Text className="text-xs font-mulish text-white">{keyword1}</Text>
          </View>
          <Text className="text-xs rounded-full font-mulish bg-[#d5ff8e] px-2 py-[2px]">
            {keyword2}
          </Text>
        </View>
      </View>
      <Link to="/">
        <View className="rounded-full bg-white p-5 shadow-sm">
          <Image
            source={require("@/assets/images/png/chevron-right.png")}
            className="w-6 h-6"
          />
        </View>
      </Link>
    </View>
  );
};

const CardAction = ({ name }: { name: string }) => {
  const actionName = name === "assigned" ? "PO (8)" : "Stats";
  const actionImg =
    name === "assigned"
      ? require("@/assets/images/png/people-alt.png")
      : require("@/assets/images/png/stats.png");

  return (
    <View className="flex-row items-center self-end mr-6 rounded-b-full bg-white bg-opacity-50 px-6 py-2 shadow-sm">
      <ActionLink
        icon={require("@/assets/images/png/deck.png")}
        text="Deck"
        href="/"
      />
      <View className="h-3 border-r border-gray-400 mx-2" />
      <ActionLink icon={actionImg} text={actionName} href="/" />
    </View>
  );
};

const ActionLink = ({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href: string;
}) => {
  return (
    <View className="flex-row items-center">
      <Image
        className="w-4 h-4 mr-1"
        source={icon as ImageSourcePropType | undefined}
      />
      <Link to={href}>
        <Text className="text-xs font-mulishSemiBold underline">{text}</Text>
      </Link>
    </View>
  );
};

const Button = ({
  children,
  hrefTo = "/",
}: {
  children: ReactNode;
  hrefTo?: string;
}) => {
  return (
    <TouchableOpacity className="mt-auto">
      <View className="items-center justify-center rounded-full bg-[#0094ff] p-[14px]">
        <Text className="text-sm font-mulishBold text-white">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

Card.Header = CardHeader;
Card.Name = CardName;
Card.Content = CardContent;
Card.Action = CardAction;
Card.Button = Button;

export default Card;
