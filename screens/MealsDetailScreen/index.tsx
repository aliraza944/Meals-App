import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../assets/Data/data";
const MealsDetailScreen = (props: any) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title="Go to Categories "
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealsDetailScreen.navigationOptions = (navigationData: any): any => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsDetailScreen;
