import * as React from "react";
import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import { Colors } from "../styles";

const { height, width } = Dimensions.get("screen");

const Categories = () => {
  return (
    <>
      <View>
        <ScrollView
          horizontal={true}
          style={{ flexDirection: "row" }}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <View key={index}>
              <CategoryItem item={item}></CategoryItem>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const data = [
  {
    id: 1,
    title: "All",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fall.png44123641-0765-44b1-9ab0-6b80b6aed2a2?alt=media&token=fa3a2dfb-6f75-4aba-bd54-6e35de11e341",
  },
  {
    id: 2,
    title: "Pastries",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2FR%20(6)%201%20(Traced).png0314a9e3-9708-44b7-a67e-5e808a83ab49?alt=media&token=559bcd45-a997-49d4-9f17-e092b2a0e384",
  },
  {
    id: 3,
    title: "Main",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Frice-bowl%201%20(Traced).pngfc90018e-5454-4274-ade9-32bf296acb30?alt=media&token=aa45cabe-9266-45f4-8563-86bdb95c1bd4",
  },
  {
    id: 4,
    title: "Native",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fblueberries%201%20(Traced).png693e9a3e-0b87-4804-93cf-1be9316c07dd?alt=media&token=ddd74031-094a-4778-8b1d-30dd6d5e5775",
  },
  {
    id: 5,
    title: "Sweet Tooth",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2FOIP%20(10)%201%20(Traced).png79bdfd46-9bd0-45b4-acf3-a3604a3f756f?alt=media&token=d8f61bf6-d06f-4f77-b6f8-218eaa31a078",
  },
];

const CategoryItem = ({ item }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        jusifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        height: height / 9,
      }}
    >
      <Image
        style={{ width: 60, height: 60 }}
        source={{ uri: item.image }}
        resizeMode="contain"
      />
      <Text
        style={{ fontSize: 12, fontFamily: "NunitoLight", color: Colors.DARK }}
      >
        {item.title}
      </Text>
    </View>
  );
};
export default Categories;
