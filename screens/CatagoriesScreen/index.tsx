import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../../assets/Data/data";
const CatagoriesScreen = (props: any) => {
  const renderItem = (itemData: any): any => {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.gridItem}>
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
export default CatagoriesScreen;
