import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MealsDetails</Text>
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
export default MealsDetailScreen;
