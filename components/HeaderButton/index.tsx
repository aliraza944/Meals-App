import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { HeaderButton as HeaderIcon } from "react-navigation-header-buttons";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/Data/data";

const HeaderButton = (props: any) => {
  return (
    <HeaderIcon
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primaryColor}
      style={styles.root}
    ></HeaderIcon>
  );
};

const styles = StyleSheet.create({
  root: {},
});
export default HeaderButton;
