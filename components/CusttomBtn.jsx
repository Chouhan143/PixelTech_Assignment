import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/Colors";

const CusttomBtn = ({ text, backgroundColor, borderColor }) => {
  const onPress = () => {
    console.log("Press");
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, { backgroundColor, borderColor }]}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: 11,
            lineHeight: 17,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CusttomBtn;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
});
