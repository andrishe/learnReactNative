import React from "react";
import { SafeAreaView, ScrollView, Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler"; // Importez GestureHandlerRootView
import { useAnimatedGestureHandler } from "react-native-reanimated";

import { Easing } from "react-native-reanimated";

const SharedValues = () => {
  // Votre code SharedValues reste inchangé
};

const Box = () => {
  // Votre code Box reste inchangé
};

const Wobble = () => {
  // Votre code Wobble reste inchangé
};

const EventsExp = () => {
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "red" : "gold",
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View
        style={[{ width: 100, height: 100, backgroundColor: "gold" }, uas]}
      />
    </PanGestureHandler>
  );
};

export const ReanimatedExp = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SharedValues />
        <Box />
        <Wobble />
        <EventsExp />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReanimatedExp;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
    alignSelf: "center",
  },
});
