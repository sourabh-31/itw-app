import { View } from "react-native";
import Heading from "../shared/Heading";
import Tile from "../shared/Tile";
import { useBrandsAndTeam } from "@/hooks/useHomeApi";

export default function Brands() {
  const { data = null, isLoading, isError } = useBrandsAndTeam();
  const brandsData = data?.userBrands?.brands ?? [];

  return (
    <View className="mt-8">
      <Heading className="pl-4">Your Brands</Heading>

      <View className="mt-1 pl-3">
        {!isLoading && !isError
          ? brandsData
              .slice(0, 3)
              .map((data) => (
                <Tile
                  key={data.brandId}
                  name={data.brandName}
                  details={`${data.eventCount} Events`}
                  imgUrl={data.brandImageUrl}
                  isOverflow
                />
              ))
          : null}

        <Tile
          name="Show All Brands"
          details={`${brandsData?.length ?? 0} Brands`}
          isLast
          isOverflow
          isShowAll
        />
      </View>
    </View>
  );
}
