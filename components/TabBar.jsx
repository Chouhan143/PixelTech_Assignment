import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import TabBarButton from "./TabBarButton";
import { colors } from "../constants/Colors";

const TabBar = ({ state, descriptors, navigation }) => {
  console.log("TabBar", state, descriptors, navigation);

  return (
    <View style={styles.tabBar} className="bg-black-100">
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        if (["_sitemap", "+not-found"].includes(route.name)) return null;
        console.log(route.name);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? "#FF9C01" : colors.textColor.Gray}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center: ",
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    gap: 4,
  },
  opacity: {
    opacity: 0,
  },
});
