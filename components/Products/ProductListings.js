import * as React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Colors } from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../Divider";
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
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
            </TouchableOpacity>

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

const OrderModal = ({ toggleModal, setToggleModal, myData }) => {
  return (
    <>
      <Modal transparent visible={toggleModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width - 40,
              height: height / 1.2,
              backgroundColor: Colors.WHITE,
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.WHITE,
                borderRadius: 60,
                position: "absolute",
                zIndex: 100,
                top: -10,
                left: -10,
              }}
              onPress={() => {
                setToggleModal(!toggleModal);
              }}
            >
              <Ionicons name="close" size={30} />
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: "30%" }}
              source={{ uri: myData.image }}
              resizeMode="cover"
            />
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontFamily: "Nunito", fontSize: 16 }}>
                {myData.meal}
              </Text>
              <Ionicons name="heart-outline" size={30} color={Colors.DEEP} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  fontSize: 17,
                  color: Colors.DEEP,
                }}
              >
                #{myData.price}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="time-outline" size={15} />
                <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                  {" "}
                  40Mins
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="clipboard-outline" size={15} />
                <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                  Pasta
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                  {myData.rating}.0
                </Text>
                <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                  {" ⭐⭐⭐⭐⭐ "}
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                  27 Reviews
                </Text>
              </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Text
                style={{ fontFamily: "NunitoMedium", color: Colors.NORMAL }}
              >
                In traditional Italian cuisine, the simplest pasta dishes are
                also the tastiest.
              </Text>
            </View>

            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: "NunitoMedium",
                  color: Colors.NORMAL,
                  fontSize: 10,
                }}
              >
                Incredent List:
              </Text>
              <View style={{ width: "85%", paddingHorizontal: 10 }}>
                <Text
                  style={{
                    fontFamily: "NunitoMedium",
                    color: Colors.NORMAL,
                    fontSize: 10,
                  }}
                >
                  Penne pasta, Olive oil, Butter, Garlic, Tomatoes, Onions,
                  Chili flakes, Parsley
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                justifyContent: "space-between",
                width: width / 1.5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Quantity:
              </Text>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3 }}>
                <Ionicons name="add" size={20} />
              </TouchableOpacity>
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                1 plate
              </Text>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3 }}>
                <Ionicons name="remove" size={20} />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 20 }}>
              <Divider />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Nunito" }}>Reviews(3)</Text>
              <Text style={{ fontFamily: "Nunito" }}>See all</Text>
            </View>
            <View style={{ padding: 20 }}>
              <Divider />
            </View>

            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  // width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                    @o*******7
                  </Text>
                  <Text style={{ fontFamily: "NunitoLight", fontSize: 10 }}>
                    {" ⭐⭐⭐⭐⭐ "}
                  </Text>
                </View>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{ fontFamily: "NunitoMedium", fontSize: 12 }}>
                    This meal is perfection!!!{" "}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontFamily: "NunitoMedium" }}>24 Dec 2022</Text>
              </View>
            </View>

            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                bottom: 0,
              }}
            >
              <View
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 15,
                  borderColor: Colors.BUTTON,
                  borderWidth: 2,
                }}
              >
                <Text style={{ fontFamily: "Nunito", color: Colors.DEEP }}>
                  Add to Cart
                </Text>
              </View>
              <View
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.BUTTON,
                }}
              >
                <Text style={{ fontFamily: "Nunito", color: Colors.DEEP }}>
                  Buy Now
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const ProductItem = () => {
  const [toggleModal, setToggleModal] = React.useState(false);
  const [myData, setData] = React.useState([]);

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
        {data.map((datum, index) => (
          <TouchableOpacity
          key={index}
            onPress={() => {
              setToggleModal(!toggleModal);
              setData(datum);
            }}
          >
            <View
              style={{
                height: 160,
                width: 165,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 20,
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
          </TouchableOpacity>
        ))}
        <OrderModal
          myData={myData}
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
        ></OrderModal>
      </View>
    </>
  );
};

export default ProductListings;
