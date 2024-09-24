import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BackgroundNoise = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/png/noise.png")}
        style={styles.noiseLayer}
        resizeMode="repeat"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: "black",
  },
  noiseLayer: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: 10,
  },
});

export default BackgroundNoise;
