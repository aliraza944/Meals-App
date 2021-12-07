import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { CATEGORIES, colors } from "../../assets/Data/data";
const CatagoriesScreen = (props: any) => {
  let TouchableComponent: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 22) {
    TouchableComponent = TouchableNativeFeedback;
  }

  const renderItem = (itemData: any): any => {
    return (
      <View style={styles.gridItem}>
        <TouchableComponent
          onPress={() => {
            props.navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryId: itemData.item.id,
              },
            });
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              ...styles.container__gridItem,
              ...{ backgroundColor: itemData.item.color },
            }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {itemData.item.title}
            </Text>
          </View>
        </TouchableComponent>
      </View>
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
    borderRadius: 10,
    overflow: "hidden",
  },
  container__gridItem: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});

CatagoriesScreen.navigationOptions = {
  headerTitle: "Catagory Meals",
};

export default CatagoriesScreen;
