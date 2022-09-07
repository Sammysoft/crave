import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
const { height, width, FlatList } = Dimensions.get("screen");

const data = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fpenne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table%201.png13e25ff4-6c72-4ca4-a720-3738e099a7ef?alt=media&token=2f56c5fc-7edd-4158-af6b-4e62ce312209",
    meal: "Penne pasta in tomato sauce",
    price: "5400",
    rating: 5,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fmexican-quesadilla-sliced-with-vegetables-sauces-table%201.pngfb2a4cc3-0f92-4648-b672-88ad45432a39?alt=media&token=ecbf8097-dd76-45fd-a6d6-3b89f2135a35",
    meal: "Club sandwich and fries",
    price: "3000",
    rating: 5,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fpolina-vegan4k-uGns8-WjA4Q-unsplash%201.png99acaac8-82e9-4ad7-b397-00327f49c69f?alt=media&token=d31a271b-2c2b-4c16-a837-69810e816ecd",
    meal: "Chicken Burger",
    price: "2000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Falexandru-bogdan-ghita-UeYkqQh4PoI-unsplash%201.png71f14460-3dfb-44a7-8f1e-d09f0fb353d4?alt=media&token=691c5c4d-c42a-4867-8fe3-d5169c1da262",
    price: "2500",
    meal: "Bean cake(Moi-Moi)",
  },
];

const ProductItem = () => {
  return (
    <>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                margin: 1,
              }}
            >
              <Text>{item.meal}</Text>
            </View>;
          }}
          numOfColumns={2}
          keyExtractor={(item, index) => index}
        ></FlatList>
    </>
  );
};
export default ProductItem;
