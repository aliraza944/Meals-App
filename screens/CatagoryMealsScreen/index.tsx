import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../../assets/Data/data";

const CatagoryMealsScreen = (props: any) => {
  const id = props.navigation.getParam("categoryId");
  const selectedMeal = CATEGORIES.find((cat) => cat.id === id);

  return (
    <View style={styles.screen}>
      <Text>Catagory Meals Screen</Text>
      <Text>{selectedMeal?.title}</Text>
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

CatagoryMealsScreen.navigationOptions = (navigationdata: any): any => {
  const id = navigationdata.navigation.getParam("categoryId");
  const selectedMeal = CATEGORIES.find((cat) => cat.id === id);
  return {
    headerTitle: selectedMeal?.title,
  };
};

export default CatagoryMealsScreen;
