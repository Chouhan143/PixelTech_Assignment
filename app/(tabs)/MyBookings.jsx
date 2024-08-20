import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/Colors";
import LocationSection from "../../components/LocationSection";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SessionOverview from "../../components/SessionOverview";

const MyBookings = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header />
      <ScrollView>
        {/* Main Section */}
        <View>
          <View style={styles.otpSec}>
            <Text style={styles.otpSecText}>Enter OTP to Begin Service:</Text>
            <Text style={styles.otpSecText2}>5245</Text>
          </View>

          {/* MapView to get location */}
          <LocationSection />

          <View style={styles.sessionDetailsContainer}>
            <View style={commonStyles.rowSpaceBetween}>
              <View style={commonStyles.rowCenter}>
                <Text style={styles.serviceNameText}>BB Glow</Text>
                <LinearGradient
                  start={{ x: 4, y: 1 }}
                  end={{ x: 0.2, y: 1 }}
                  colors={["#FBA10A", "#FFFF"]}
                  style={styles.statusView}
                >
                  <Text style={styles.statusText}>UPCOMING</Text>
                </LinearGradient>
              </View>
              <Text style={styles.priceText}>₹5,800</Text>
            </View>

            {/* Section 1 */}
            <View style={commonStyles.rowSpaceBetween}>
              <View style={[commonStyles.rowCenter, { gap: 5 }]}>
                <Feather
                  name="calendar"
                  size={20}
                  color={colors.textColor.Gray}
                />
                <Text style={styles.contentText}>12 Nov,Sat | 4:00 PM</Text>
              </View>
              <View style={[commonStyles.rowCenter, { gap: 5 }]}>
                <Ionicons
                  name="time-outline"
                  size={20}
                  color={colors.textColor.Gray}
                />
                <Text style={styles.contentText}>45 mins</Text>
              </View>
            </View>
            {/* Section 2 */}
            <View style={commonStyles.rowSpaceBetween}>
              <View style={[commonStyles.rowCenter, { gap: 5 }]}>
                <AntDesign
                  name="home"
                  size={20}
                  color={colors.textColor.Gray}
                />
                <Text style={styles.contentText}>
                  Akshya Nagar 1st block 1st cross mulund West, Mumbai 400080
                </Text>
              </View>
            </View>
            <View style={styles.bottomRect} />
            {/* OVERVIEW section */}
            <View style={commonStyles.flexDirectionColumn}>
              <Text
                style={[styles.contentText, { color: colors.textColor.black }]}
              >
                OVERVIEW: Comprehensive Skin and Hair Analysis
              </Text>
              <Text style={[styles.contentText, { marginTop: 10 }]}>
                During your initial consultation, our specialist will conduct a
                thorough analysis of your skin type and hair texture. We'll
                discuss your goals and expectations, and create a personalized
                treatment plan tailored to your needs.
              </Text>
            </View>
            <View style={styles.bottomRect} />
            {/* Session Overview */}
            <View style={commonStyles.flexDirectionColumn}>
              <Text style={styles.sessionOverview}>Session Overview</Text>
              <SessionOverview />
            </View>
            {/*  policy section */}
            <View style={styles.policy}>
              <Text style={styles.policyText}>Term & Condition</Text>
              <Text style={styles.policyText}>Privacy Policy</Text>
            </View>
            {/* contact details */}
            <View style={styles.contactBox}>
              {/* <View style={[styles.contectInner, commonStyles.rowSpaceBetween]}> */}
              <LinearGradient
                start={{ x: 0, y: 2 }}
                end={{ x: 0, y: -1 }}
                colors={["#ECECEC", "#FFFF"]}
                style={[styles.contectInner, commonStyles.rowSpaceBetween]}
              >
                <View style={commonStyles.rowCenter}>
                  <Image
                    source={require("../../assets/images/professional.jpg")}
                    resizeMode="cover"
                    style={styles.image}
                  />

                  <View>
                    <Text style={styles.priceText}>Rachel Andrews</Text>
                    <Text style={[styles.contentText, { color: "#33334B" }]}>
                      Your Professional
                    </Text>
                  </View>
                </View>
                <LinearGradient
                  start={{ x: 0, y: 2 }}
                  end={{ x: 0, y: -1 }}
                  colors={["#D1B363", "#F4B8AF"]}
                  style={styles.callBox}
                >
                  <Ionicons name="call-outline" size={25} color="#fff" />
                </LinearGradient>
              </LinearGradient>
              {/* </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookings;

const commonStyles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  flexDirectionColumn: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  otpSec: {
    width: "100%",
    height: 50,
    backgroundColor: colors.bgColor.black,
    marginVertical: 20,
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
    gap: 5,
  },
  otpSecText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 20.15,
  },
  otpSecText2: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },
  sessionDetailsContainer: {
    marginTop: 1,
  },
  serviceNameText: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
    color: colors.textColor.black,
  },
  statusView: {
    paddingRight: 20,
    paddingVertical: 10,
    borderTopRightRadius: 37,
    borderBottomRightRadius: 37,
  },
  statusText: {
    color: "#FBA10A",
  },
  priceText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    color: colors.textColor.black,
  },
  contentText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    color: colors.textColor.Gray,
  },
  bottomRect: {
    width: "100%",
    height: 5,
    backgroundColor: "rgba(51, 51, 75, 0.15)",
    marginVertical: 15,
  },
  sessionOverview: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    color: colors.textColor.black,
  },
  policy: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 25,
    backgroundColor: "rgba(87, 164, 187, 0.15)",
    marginVertical: 10,
  },
  policyText: {
    color: "#57A4BB",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
  },
  contactBox: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 20,
  },
  contectInner: {
    width: "90%",
    height: 80,
    flexDirection: "row",
    backgroundColor: "green",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  image: {
    width: 47,
    height: 47,
    borderRadius: 50,
  },
  callBox: {
    padding: 13,
    borderRadius: 5,
  },
});
