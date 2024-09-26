import { Image, StyleSheet, Text, View } from "react-native";
import Heading from "../shared/Heading";
import StyledText from "../shared/StyledText";
import { Calendar, NotificationBing } from "iconsax-react-native";
import { useProfile } from "@/hooks/useHomeApi";
import { roleCombiner } from "@/lib/utils";
import { Skeleton } from "moti/skeleton";

export default function Profile() {
  const { data = null, isLoading, isError } = useProfile();

  const skeletonCommonProps = {
    colorMode: "dark",
    transition: {
      type: "timing",
      duration: 2000,
    },
  } as const;

  const isNull = data === null;
  const userName = `${data?.firstName} ${data?.lastName}`;
  const roles = data?.roles;

  return (
    <View className="flex-row items-center justify-between pl-3 pr-4 mt-4">
      <Skeleton.Group show={isLoading || isError}>
        <View className="flex-row items-center gap-2">
          {/* Profile image */}

          <View>
            <Skeleton
              height={50}
              width={50}
              radius={"round"}
              {...skeletonCommonProps}
            >
              {!isLoading && !isError && !isNull ? (
                <Image
                  source={{ uri: data?.profileImage }}
                  className="w-[50] h-[50] rounded-full"
                />
              ) : (
                <Image
                  source={require("@/assets/images/png/profile.png")}
                  className="w-[50] h-[50] rounded-full"
                />
              )}
            </Skeleton>
          </View>

          {/* Profile details */}

          <View>
            <Skeleton width={180} height={26} {...skeletonCommonProps}>
              <View className="flex-row items-center">
                <Heading size="xl">Hi,</Heading>
                {!isLoading && !isError && !isNull ? (
                  <View className="px-2 rounded-lg" style={styles.tag}>
                    <Heading size="base">{roleCombiner(roles ?? [])}</Heading>
                  </View>
                ) : null}
              </View>
            </Skeleton>

            <Skeleton height={22} width={100} {...skeletonCommonProps}>
              {!isLoading && !isError && !isNull ? (
                <StyledText weight="normal">{userName}</StyledText>
              ) : (
                <StyledText weight="normal">User</StyledText>
              )}
            </Skeleton>
          </View>
        </View>

        {/* Action icons */}

        <View className="flex-row items-center gap-5">
          <Calendar size={24} color="#fff" variant="Bold" />
          <NotificationBing size={24} color="#fff" variant="Bold" />
        </View>
      </Skeleton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "rgba(39, 237, 166, 0.1)",
  },
});
