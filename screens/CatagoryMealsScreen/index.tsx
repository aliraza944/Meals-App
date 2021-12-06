import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CatagoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Catagory Meals Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CatagoryMealsScreen;
