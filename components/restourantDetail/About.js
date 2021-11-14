import React from "react";
import { View, Text, Image } from "react-native";

const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? "• " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestourantImage image={image} />
      <RestourantTitle name={name} />
      <RestourantDescription description={description} />
    </View>
  );
};

export default About;

const RestourantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestourantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestourantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
