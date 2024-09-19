import Assigned from "@/components/home/Assigned";
import Brands from "@/components/home/Brands";
import Inventories from "@/components/home/Inventories";
import MyTeam from "@/components/home/MyTeam";
import NewsFeed from "@/components/home/NewsFeed";
import Profile from "@/components/home/Profile";
import QuickActions from "@/components/home/QuickActions";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Profile />
        <NewsFeed />
        <QuickActions />
        <Inventories />
        <Assigned />
        <Brands />
        <MyTeam />
      </ScrollView>
    </SafeAreaView>
  );
}
