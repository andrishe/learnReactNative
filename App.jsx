import React from "react";

import { View, StyleSheet, Text } from "react-native";
import Button from "./animations/Button";
import { Sequence } from "./animations/Sequence";
import { FontAwesome } from "@expo/vector-icons";
import ReanimatedExp from "./animations/ReanimatedExp";

import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    // <ReanimatedExp />

    //  <Text style={{ fontSize: 32, fontWeight: "bold" }}>Animations</Text>
    //  <Button title={"Press me"} />
    // <Sequence>
    //   <FontAwesome name="bell" size={50} color="gold" />
    // </Sequence>

    <RootNavigator />
  );
};
export default App;
