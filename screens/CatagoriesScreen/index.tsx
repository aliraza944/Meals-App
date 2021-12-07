import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES, colors } from "../../assets/Data/data";
const CatagoriesScreen = (props: any) => {
  const renderItem = (itemData: any): any => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        style={styles.gridItem}
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderItem} />;
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

CatagoriesScreen.navigationOptions = {
  headerTitle: "Catagory Meals",
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: "white",
};

export default CatagoriesScreen;
