import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors } from "../../constants/Colors";
import SearchInput from "../../components/SearchInput";
import Services from "../../components/Services";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeading}>
        <Text style={styles.headingText}>My Bookings</Text>
      </View>
      {/* search bookings */}
      <SearchInput placeholder="Search your bookings..." />
      {/* service section */}
      <Services />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  topHeading: {
    width: responsiveWidth(100),
    backgroundColor: colors.bgColor.white,
    paddingLeft: 16,
    paddingVertical: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textColor.black,
  },
});
