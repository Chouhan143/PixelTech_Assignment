import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/Colors";

export default function CheckContainer() {
  const [isChecked, setChecked] = useState(false);

  const servicesData = [
    {
      id: 1,
      name: "All Sessions",
    },
    {
      id: 2,
      name: "Ongoing Sessions",
    },
    {
      id: 3,
      name: "Upcoming Sessions",
    },
    {
      id: 4,
      name: "Missed Sessions",
    },
    {
      id: 5,
      name: "Completed Sessions",
    },
    {
      id: 6,
      name: "Cancelled Sessions",
    },
  ];

  return (
    <View>
      <FlatList
        data={servicesData}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked === item.id}
                onValueChange={() => setChecked(item.id)}
                color={isChecked === item.id ? "#4630EB" : undefined}
              />
              <Text style={styles.paragraph}>{item.name}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity style={[styles.btn]}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 25.8,
          }}
        >
          APPLY
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    color: colors.textColor.black,
  },
  checkbox: {
    margin: 8,
    color: "#CFD0D2",
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: colors.textColor.black,
    marginVertical: 15,
  },
});
