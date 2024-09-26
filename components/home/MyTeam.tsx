import { View } from "react-native";
import Heading from "../shared/Heading";
import Tile from "../shared/Tile";
import { useBrandsAndTeam } from "@/hooks/useHomeApi";
import { roleCombiner } from "@/lib/utils";

export default function MyTeam() {
  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const teamData = data?.userTeam?.teamMembers ?? [];

  return (
    <View className="mt-8 mb-8">
      <Heading className="pl-4">My Team</Heading>

      <View className="mt-1 px-3">
        {!isLoading && !isError
          ? teamData
              .slice(0, 3)
              .map((data) => (
                <Tile
                  key={data.userId}
                  name={data.userFirstName}
                  details={`${roleCombiner(data.roles)}`}
                  imgUrl={data.profileImageUrl}
                />
              ))
          : null}

        <Tile
          name="Show All Brands"
          details={`${teamData?.length ?? 0} Brand Owners`}
          isLast
          isShowAll
        />
      </View>
    </View>
  );
}
