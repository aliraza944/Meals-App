import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CatagoriesScreen from "../../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../../screens/CatagoryMealsScreen";
import MealsDetailScreen from "../../screens/MealsDetailScreen";

const MealsNavigation = createStackNavigator({
  Categories: CatagoriesScreen,
  CategoryMeals: CatagoryMealsScreen,
  MealDetail: MealsDetailScreen,
});

export default createAppContainer(MealsNavigation);
