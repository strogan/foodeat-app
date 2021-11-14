import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestourants = [
  {
    name: "rest yelp",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/wpnO7yB337a5rnhcZVJAiA/o.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1333,
    rating: 3.9,
  },
  {
    name: "rest2",
    image_url:
      "https://crosscut.com/sites/default/files/styles/max_1330x1330/public/images/articles/030620_m3_seattle_cornavirus_0177.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 12,
    rating: 3.9,
  },
  {
    name: "rest3",
    image_url:
      "https://crosscut.com/sites/default/files/styles/max_1330x1330/public/images/articles/030620_m3_seattle_cornavirus_0177.jpg",
    categories: ["Indian", "Bar"],
    price: "$$$",
    reviews: 143,
    rating: 4.9,
  },
];

export default function RestourantItems({ navigation, ...props }) {
  return (
    <>
      {props.restourantData.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestourantDetails", {
              name: item.name,
              image: item.image_url,
              price: item.price,
              reviews: item.review_count,
              rating: item.rating,
              categories: item.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestourantImage image={item.image_url} />
            <RestourantInfo name={item.name} rating={item.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestourantImage = (props) => (
  <>
    <Image
      style={{ width: "100%", height: 180 }}
      source={{
        uri: props.image,
      }}
    />

    <View
      style={{
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 999999,
      }}
    >
      <TouchableOpacity>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  </>
);

const RestourantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
