import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../../assets/Data/data";
import CatagoriesScreen from "../../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../../screens/CatagoryMealsScreen";
import MealsDetailScreen from "../../screens/MealsDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoriteScreen from "../../screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
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

const MealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentColor,
    },
  }
);

export default createAppContainer(MealsTabNavigator);
