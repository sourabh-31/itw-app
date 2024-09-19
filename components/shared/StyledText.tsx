import { ReactNode } from "react";
import { Text } from "react-native";
import clsx from "clsx";

type StyledTextProps = {
  children: ReactNode;
  weight?: "normal" | "medium" | "semibold";
  className?: string;
};

export default function StyledText({
  children,
  weight = "medium",
  className,
  ...props
}: StyledTextProps) {
  const textClasses = clsx(
    "text-white text-sm",
    {
      "font-mulish": weight === "normal",
      "font-mulishMedium": weight === "medium",
      "font-mulishSemiBold": weight === "semibold",
    },
    className
  );

  return (
    <Text className={textClasses} {...props}>
      {children}
    </Text>
  );
}
