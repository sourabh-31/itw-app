import { View } from "react-native";
import Heading from "../shared/Heading";
import { BrandData } from "@/data/home.data";
import Tile from "../shared/Tile";

const getImageSource = (imgSrc: string) => {
  switch (imgSrc) {
    case "@/assets/images/png/brands/leaguex-logo.png":
      return require("@/assets/images/png/brands/leaguex-logo.png");
    case "@/assets/images/png/brands/bmw-logo.png":
      return require("@/assets/images/png/brands/bmw-logo.png");
    case "@/assets/images/png/brands/google-logo.png":
      return require("@/assets/images/png/brands/google-logo.png");
    default:
      return null;
  }
};

export default function Brands() {
  return (
    <View className="mt-8">
      <Heading className="pl-4">Your Brands</Heading>

      <View className="mt-1 pl-3">
        {BrandData.map((data) => (
          <Tile
            key={data.id}
            name={data.name}
            details={data.details}
            imgUrl={getImageSource(data.img)}
            isOverflow
          />
        ))}

        <Tile
          name="Show All Brands"
          details="80 Brand"
          imgUrl={require("@/assets/images/png/brands/brands.png")}
          isLast
          isOverflow
        />
      </View>
    </View>
  );
}
