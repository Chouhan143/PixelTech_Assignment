import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Colors";

const SessionOverview = () => {
  const contentArr = [
    {
      id: 1,
      title: "Start Session",
      describe: "Share the OTP to the professional for the treatment to begin",
    },
    {
      id: 2,
      title: "Session Ongoing",
      describe: "Hope you enjoy your session",
    },
    {
      id: 3,
      title: "End Session",
      describe: "Share the OTP to the professional for the treatment to end",
    },
    {
      id: 4,
      title: "Provide Feedback",
      describe: "Help us improve your experience by providing feedback",
    },
  ];

  return (
    <FlatList
      data={contentArr}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.numberContainer}>
              <Text style={styles.numberText}>{item.id}</Text>
            </View>
            <View style={styles.sessionView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.describe}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default SessionOverview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  numberContainer: {
    position: "absolute",
    left: 0,
    zIndex: 1,
    backgroundColor: "#CFD0D2", // Background color to match the parent background
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.bgColor.white,
  },
  sessionView: {
    flex: 1,
    marginLeft: 15, // Offset to the right to accommodate the number view
    borderWidth: 1,
    borderColor: "#CFD0D2",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 21,
    color: colors.textColor.black,
  },
  description: {
    fontSize: 14,
    color: colors.textColor.Gray,
    fontWeight: "600",
    lineHeight: 21.7,
  },
});
