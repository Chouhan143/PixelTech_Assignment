import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { icons } from "../assets/icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 500,
    });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1]);
    const top = interpolate(scale.value, [0, 1], [0, 5]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const IconComponent = icons[routeName] || icons.Default;

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={animatedIconStyle}>
        {isFocused ? (
          <MaskedView
            maskElement={
              <View style={{ backgroundColor: "transparent" }}>
                <IconComponent color={"black"} />
              </View>
            }
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#F4B8AF", "#D1B363"]} // Define your gradient colors here
            >
              <View>
                <IconComponent color={"transparent"} />
              </View>
            </LinearGradient>
          </MaskedView>
        ) : (
          <IconComponent color={color} />
        )}
      </Animated.View>
      {isFocused ? (
        <MaskedView
          maskElement={
            <Text style={[{ backgroundColor: "transparent" }]}>{label}</Text>
          }
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#F4B8AF", "#D1B363"]}
          >
            <Animated.Text style={[{ opacity: 0, fontSize: 14 }]}>
              {label}
            </Animated.Text>
          </LinearGradient>
        </MaskedView>
      ) : (
        <Animated.Text style={[{ color, fontSize: 12 }]}>{label}</Animated.Text>
      )}
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
