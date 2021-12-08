import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES, MEALS, colors } from "../../assets/Data/data";

const CatagoryMealsScreen = (props: any) => {
  const id = props.navigation.getParam("categoryId");
  const selectedMeal = CATEGORIES.find((cat) => cat.id === id);

  const displayedMeal = MEALS.filter((meal: any) =>
    meal.categoryId.indexOf(selectedMeal)
  );

  const renderMealItem = (itemData: any): any => {
    return (
      <View style={styles.mealsItem}>
        <TouchableOpacity>
          <View>
            <View style={styles.mealsHeader}>
              <ImageBackground
                source={{ uri: itemData.item.imageUrl }}
                style={styles.bgImage}
              >
                <Text style={styles.title} numberOfLines={1}>
                  {itemData.item.title}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.mealsDetail}>
              <Text>{itemData.item.duration}min</Text>
              <Text>{itemData.item.complexity.toUpperCase()}</Text>
              <Text>{itemData.item.affordability}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeal}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  mealsItem: {
    height: 300,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealsHeader: {
    height: "85%",
  },
  mealsDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",

    flexDirection: "row",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: "center",
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
