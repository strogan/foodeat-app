import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";

import HeaderTabs from "../components/Home/HeaderTabs";
import RestourantItems, {
  localRestourants,
} from "../components/Home/RestourantItems";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
  "Cku_7mX_9whX8ZFmuoIaue9z1j7S2dtrotL7fPnlGnUI4RwuSEb0oz7o3R9pU4-VYi3miDcSV1ty7MHFb1z2QW2CtV7ENQHrpdLTsmkQEw7dUXZy9GAzKYhQpLGOYXYx";

export default function Home({ navigation }) {
  const [restourantData, setRestourantData] = useState(localRestourants);
  const [city, setCity] = useState("Austin");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestourantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      /*mode: "no-cors",*/
      headers: {
        /*"Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",*/
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestourantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestourantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestourantItems
          restourantData={restourantData}
          navigation={navigation}
        />
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
