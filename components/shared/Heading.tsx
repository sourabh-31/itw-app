import { ReactNode } from "react";
import { Text } from "react-native";
import clsx from "clsx";

type HeadingProps = {
  children: ReactNode;
  size?: "base" | "large" | "xl" | "xxl";
  className?: string;
};

export default function Heading({
  children,
  size = "xl",
  className,
  ...props
}: HeadingProps) {
  const textClasses = clsx(
    "text-white font-recoletaAlt",
    {
      "text-base": size === "base",
      "text-lg": size === "large",
      "text-xl": size === "xl",
      "text-2xl": size === "xxl",
    },
    className
  );

  return (
    <Text className={textClasses} {...props}>
      {children}
    </Text>
  );
}
