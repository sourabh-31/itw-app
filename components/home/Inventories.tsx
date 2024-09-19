import { FlatList, View } from "react-native";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { InventoryData } from "@/data/home.data";
import { InventoryDataType } from "@/types/home.type";

export default function Inventories() {
  // Card render structure

  const renderCard = ({ item }: { item: InventoryDataType }) => (
    <Card bgColor={item.bgColor}>
      <Card.Header />
      <Card.Name name={item.name} />

      <View className="flex flex-col gap-4 mb-5">
        {item.items.map((itemDetail) => (
          <View key={itemDetail.name}>
            <Card.Content
              title={itemDetail.name}
              keyword1={itemDetail.keyword1}
              keyword2={itemDetail.keyword2}
            />
            <Card.Action name="inventory" />
          </View>
        ))}
      </View>
      <Card.Button>SHOW ALL EVENTS ({InventoryData.length})</Card.Button>
    </Card>
  );

  return (
    <View className="mt-10">
      <Container
        title="Your Inventories"
        isTag
        tagName="PO"
        tagClassName="text-[#228B22] bg-[#CEFFCE]"
      >
        <FlatList
          horizontal
          data={InventoryData}
          renderItem={renderCard}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 8 }}
          className="mt-4"
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </View>
  );
}
