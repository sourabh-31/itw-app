import { Image, StyleSheet, Text, View } from "react-native";
import Heading from "../shared/Heading";
import StyledText from "../shared/StyledText";
import { Calendar, NotificationBing } from "iconsax-react-native";

export default function Profile() {
  return (
    <View className="flex-row items-center justify-between pl-3 pr-4 mt-4">
      <View className="flex-row items-center gap-2">
        {/* Profile image */}

        <Image source={require("@/assets/images/png/profile.png")} />

        {/* Profile details */}

        <View>
          <View className="flex-row items-center">
            <Heading size="xxl">Hi,</Heading>
            <View className="px-2 rounded-lg" style={styles.tag}>
              <Heading size="large">B.O</Heading>
            </View>
          </View>
          <StyledText weight="normal">Aravind Krishnan</StyledText>
        </View>
      </View>

      {/* Action icons */}

      <View className="flex-row items-center gap-5">
        <Calendar size={24} color="#fff" variant="Bold" />
        <NotificationBing size={24} color="#fff" variant="Bold" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "rgba(39, 237, 166, 0.1)",
  },
});
