import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { serviceslist } from "../hooks/servicesData";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../constants/Colors";
import CusttomBtn from "./CusttomBtn";
import Feather from "@expo/vector-icons/Feather";
import {
  getSessionTextColor,
  getStatusStyles,
} from "../hooks/useGradientColor";

const Services = (props) => {
  const renderServiceItem = ({ item }) => {
    const { gradientColors, textColor } = getStatusStyles(item.status);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <LinearGradient
              start={{ x: 4, y: 1 }}
              end={{ x: 0.2, y: 1 }}
              colors={gradientColors}
              style={styles.statusView}
            >
              <Text style={[styles.statusText, { color: textColor }]}>
                {item.status}
              </Text>
            </LinearGradient>
            <Text style={styles.textheading}>{item.serviceName}</Text>
            <Text style={styles.textSubHeading}>
              {`${item.sessionCompleted}/8 Sessions Completed`}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.textheading}>₹{item.price}</Text>
              <Text style={styles.textSubHeading}>|</Text>
              <Text style={styles.textSubHeading}>Per Session</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Image
              source={item.img}
              resizeMode="contain"
              style={styles.serviceImage}
            />
          </View>
        </View>

        {/* Bottom Boxes */}
        <View style={styles.bottomBoxContainer}>
          {[item.session1, item.session2].map((session, index) => (
            <View
              key={index}
              style={[
                styles.innerBox,
                { borderLeftColor: getSessionTextColor(session.sessionStatus) },
              ]}
            >
              <View style={styles.sessionHeader}>
                <Text style={styles.headSession}>
                  Session {session.sessionNo}
                </Text>
                <Text style={styles.headSession}>.</Text>
                <Text
                  style={[
                    styles.headSession,
                    {
                      color: getSessionTextColor(session.sessionStatus),
                    },
                  ]}
                >
                  {session.sessionStatus}
                </Text>
              </View>
              <View style={styles.sessionContent}>
                {session.sessionStatus !== "COMPLETED" ? (
                  <CusttomBtn
                    text={session.btnText || "SCHEDULE NOW"}
                    backgroundColor={index === 0 ? "#000" : colors.bgColor.gray}
                    borderColor={index === 0 ? "gray" : "rgba(0,0,0,0.5)"}
                    textFont={11}
                  />
                ) : (
                  <View style={styles.completedSession}>
                    <Feather
                      name="calendar"
                      size={22}
                      color={colors.textColor.Gray}
                    />
                    <Text style={styles.completedSessionText}>
                      12 Now | 4:00 PM
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Rectangle */}
        <View style={styles.bottomRect} />
      </View>
    );
  };

  return <FlatList data={serviceslist} renderItem={renderServiceItem} />;
};

export default Services;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  leftSection: {
    flex: 1.2,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ECECEC",
    gap: 10,
  },
  rightSection: {
    flex: 0.9,
    alignItems: "flex-end",
  },
  statusView: {
    paddingRight: 25,
    paddingVertical: 15,
    borderTopRightRadius: 37,
    borderBottomRightRadius: 37,
  },
  statusText: {
    fontWeight: "700",
    fontSize: 16,
  },
  textheading: {
    color: colors.textColor.black,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24.5,
  },
  textSubHeading: {
    color: colors.textColor.Gray,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21.5,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 10,
  },
  serviceImage: {
    width: "100%",
    height: "100%",
  },
  bottomBoxContainer: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  innerBox: {
    borderWidth: 1,
    borderLeftWidth: 5,
    borderRadius: 8,
    borderColor: "#CFD0D2",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 10,
    paddingHorizontal: 10,
  },
  sessionHeader: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headSession: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    lineHeight: 21,
  },
  sessionContent: {
    alignItems: "flex-start",
  },
  completedSession: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  completedSessionText: {
    fontWeight: "600",
    color: colors.textColor.Gray,
  },
  bottomRect: {
    width: "100%",
    height: 5,
    backgroundColor: "rgba(51, 51, 75, 0.15)",
    marginVertical: 15,
  },
});
