import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottiView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restourantDetail/MenuItems";
const OrderCompleted = () => {
  const { items, restourantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createAt", "desc")
      .limit(1)
      .onSnapshot((snap) => {
        snap.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottiView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restourantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottiView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;