import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../../assets/Data/data";
import CatagoriesScreen from "../../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../../screens/CatagoryMealsScreen";
import MealsDetailScreen from "../../screens/MealsDetailScreen";

const MealsNavigation = createStackNavigator(
  {
    Categories: CatagoriesScreen,
    CategoryMeals: CatagoryMealsScreen,
    MealDetail: MealsDetailScreen,
  },
  {
    mode: "card",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealsNavigation);
