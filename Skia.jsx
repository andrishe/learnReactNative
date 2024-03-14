import React from "react";

import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  Canvas,
  Box,
  BoxShadow,
  Image,
  BackdropBlur,
  Fill,
  rrect,
  rect,
  useImage,
} from "@shopify/react-native-skia";
const Demo = () => (
  <Canvas style={{ width: 256, height: 256 }}>
    <Fill color="#add8e6" />
    <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#add8e6">
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
    </Box>
  </Canvas>
);

const Skia = () => {
  const { width, height } = useWindowDimensions();
  const image = useImage(require("./assets/woo.jpeg"));

  if (!image) {
    return null;
  }

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color={"#ecf3ff"} />
      <Image
        image={image}
        x={0}
        y={0}
        width={width}
        height={height}
        fit="cover"
      />
      <BackdropBlur
        blur={15}
        clip={{
          x: width * 0.1,
          y: height * 0.1,
          height: height * 0.8,
          width: width * 0.8,
        }}
      >
        <Fill color={"#ffffff10"} />
      </BackdropBlur>
    </Canvas>
  );
};
export default Skia;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // ...Platform.select({
    //   ios: { backgroundColor: PlatformColor("systemBlue") },
    //   android: {
    //     backgroundColor: PlatformColor("@android:color/holo_red_light"),
    //   },
    // }),
  },
});
