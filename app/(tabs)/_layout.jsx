import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          headerTitle: "Home",
        }}
      />

      <Tabs.Screen
        name="MyBookings"
        options={{ title: "MyBookings", headerShown: false }}
      />

      <Tabs.Screen
        name="Club"
        options={{ title: "Club", headerShown: false }}
      />

      <Tabs.Screen
        name="Assistent"
        options={{
          title: "Assistent",
          headerShown: false,
          tabBarLabel: "Assistent",
          headerTitle: "Assistent",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
