import { FlatList, View } from "react-native";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { AssignedData } from "@/data/home.data";
import { InventoryDataType } from "@/types/home.type";

export default function Assigned() {
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
      <Card.Button>SHOW ALL EVENTS ({AssignedData.length})</Card.Button>
    </Card>
  );

  return (
    <View className="mt-8">
      <Container
        title="Assigned for you"
        isTag
        tagName="BO"
        tagClassName="text-[#000080] bg-[#B6EAFF]"
      >
        <FlatList
          horizontal={true}
          data={AssignedData}
          renderItem={renderCard}
          keyExtractor={(item) => item.name}
          className="mt-4"
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 8 }}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </View>
  );
}
