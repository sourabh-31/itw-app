import { View } from "react-native";
import Container from "../shared/Container";
import Feed from "./Feed";

export default function NewsFeed() {
  return (
    <View className="mt-8">
      <Container title="News Feed" isLinkUnderline={false}>
        <View className="mt-3 pl-4">
          <Feed
            topic="📃Sep'24 Events List"
            description="Hey team, here is the new events list for September..."
            isActionBtn
            isBorder
          />
        </View>
      </Container>
    </View>
  );
}
