import { View } from "react-native";
import Heading from "../shared/Heading";
import { TeamData } from "@/data/home.data";
import Tile from "../shared/Tile";

const getImageSource = (imgSrc: string) => {
  switch (imgSrc) {
    case "@/assets/images/png/members/member1.png":
      return require("@/assets/images/png/members/member1.png");
    case "@/assets/images/png/members/member2.png":
      return require("@/assets/images/png/members/member2.png");
    case "@/assets/images/png/members/member3.png":
      return require("@/assets/images/png/members/member3.png");
    default:
      return null;
  }
};

export default function MyTeam() {
  return (
    <View className="mt-8 mb-8">
      <Heading className="pl-4">My Team</Heading>

      <View className="mt-1 px-3">
        {TeamData.map((data) => (
          <Tile
            key={data.id}
            name={data.name}
            details={data.details}
            imgUrl={getImageSource(data.img)}
          />
        ))}

        <Tile
          name="Show All"
          details="10 Brand Owners"
          imgUrl={require("@/assets/images/png/members/members.png")}
          isShowAll
          isLast
        />
      </View>
    </View>
  );
}
