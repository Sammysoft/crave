import * as React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { Colors } from "../styles";
const { width, height } = Dimensions.get("screen");

const ProductListings = () => {
  return (
    <>
      <HeadSwitcher />
    </>
  );
};

const HeadSwitcher = () => {
  return (
    <>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{}}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderBottomWidth: 2,
                borderBottomColor: Colors.BUTTON,
              }}
            >
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                All
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Trending
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Your eyes only
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Friendzone
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Platter
              </Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: height / 2, height: height / 2.4 }}
        >
          <ProductItem />
        </ScrollView>
      </View>
    </>
  );
};

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
    rating: 5,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Falexandru-bogdan-ghita-UeYkqQh4PoI-unsplash%201.png71f14460-3dfb-44a7-8f1e-d09f0fb353d4?alt=media&token=691c5c4d-c42a-4867-8fe3-d5169c1da262",
    price: "2500",
    meal: "Bean cake(Moi-Moi)",
    rating: 5,
  },
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
    rating: 5,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Falexandru-bogdan-ghita-UeYkqQh4PoI-unsplash%201.png71f14460-3dfb-44a7-8f1e-d09f0fb353d4?alt=media&token=691c5c4d-c42a-4867-8fe3-d5169c1da262",
    price: "2500",
    meal: "Bean cake(Moi-Moi)",
    rating: 5,
  },
];

const ProductItem = () => {
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "wrap",
          margin: 10,
        }}
      >
        {data.map((datum, index) => {
          return (
            <>
              <View
                key={index}
                style={{
                  height: 160,
                  width: 165,
                  backgroundColor: "white",
                  marginTop: 10,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              >
                <Image
                  source={{ uri: datum.image }}
                  style={{
                    width: 165,
                    height: 90,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      padding: 10,
                      fontSize: 12,
                      flex: 1,
                    }}
                  >
                    {datum.meal}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      color: Colors.DEEP,
                      padding: 5,
                    }}
                  >
                    #{datum.price}
                  </Text>
                </View>
                <Text style={{ paddingLeft: 5, fontSize: 10 }}>
                  {" ⭐⭐⭐⭐⭐ "}
                </Text>
              </View>
            </>
          );
        })}
      </View>
    </>
  );
};

export default ProductListings;
