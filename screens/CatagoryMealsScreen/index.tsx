import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CatagoryMealsScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>Catagory Meals Screen</Text>
      <Button
        title="Go To MealDetail"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
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
