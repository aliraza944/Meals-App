import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MealsDetailScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>MealsDetails</Text>
      <Button
        title="Go to Categories "
        onPress={() => props.navigation.popToTop()}
      />
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
export default MealsDetailScreen;
