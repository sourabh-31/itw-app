import React from "react";
import { FlatList, View } from "react-native";
import Container from "../shared/Container";
import Card from "../shared/Card";
import { useInventory } from "@/hooks/useHomeApi";
import {
  COUNT,
  EVENT_STATUS,
  PAGE_NO,
  SEARCH_FOR,
} from "@/constants/defaultParams";
import { InventoryOrAssignedItem } from "@/types/inventoryAndAssigned.type";
import { daysRemaining } from "@/lib/utils";
import CardSkeleton from "../shared/CardSkeleton";

const colors = ["#d9ead5", "#d8dfe9", "#efe4ff", "#c4d4ff"];

export default function Inventories() {
  const {
    data = null,
    isLoading,
    isError,
  } = useInventory(PAGE_NO, EVENT_STATUS, COUNT, SEARCH_FOR);

  const inventoryData = data?.data?.inventories ?? [];

  // Card render structure with color cycling
  const renderCard = ({
    item,
    index,
  }: {
    item: InventoryOrAssignedItem;
    index: number;
  }) => {
    const bgColor = colors[index % colors.length]; // Get color based on index

    return (
      <Card bgColor={bgColor}>
        <Card.Header icon={item.image} />
        <Card.Name name={item.name} />

        <View className="flex flex-col gap-4 mb-5">
          {item.events.map((itemDetail) => (
            <View key={itemDetail.id}>
              <Card.Content
                title={itemDetail.name}
                keyword1={daysRemaining(itemDetail.endDate)}
                keyword2={itemDetail.type}
              />
              <Card.Action name="inventory" />
            </View>
          ))}
        </View>
        <Card.Button>SHOW ALL EVENTS ({item.eventCount})</Card.Button>
      </Card>
    );
  };

  return (
    <View className="mt-10">
      <Container
        title="Your Inventories"
        isTag
        length={inventoryData.length ?? 0}
        tagName="PO"
        tagClassName="text-[#228B22] bg-[#CEFFCE]"
      >
        {!isLoading && !isError ? (
          <FlatList
            horizontal
            data={inventoryData}
            renderItem={renderCard}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 8 }}
            className="mt-4"
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View className="pt-4 pl-4">
            <CardSkeleton />
          </View>
        )}
      </Container>
    </View>
  );
}
