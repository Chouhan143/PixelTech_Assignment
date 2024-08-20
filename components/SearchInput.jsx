import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckContainer from "./CheckContainer";

const SearchInput = ({ placeholder, value, onChangeText, style, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.iconLeft}
        onPress={() => console.log("hii")}
      >
        <Icon name={"search"} size={26} color={colors.textColor.black} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#CDCDE0"}
        {...props}
      />
      <TouchableOpacity
        style={styles.iconRight}
        onPress={() => setModalVisible(true)} // Open modal on press
      >
        <Image
          source={require("../assets/images/setting.png")}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>

      {/* Modal component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.rowCommon}>
              <View>
                <Text style={styles.modalText}>Filters</Text>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#9494A0" />
              </TouchableOpacity>
            </View>
            <View>
              {/* check box and content */}
              <CheckContainer />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    width: "90%",
    alignSelf: "center",
  },
  rowCommon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    padding: 15,
    borderColor: "rgba(0, 0, 33, 0.07)",
    backgroundColor: "rgba(0, 0, 33, 0.02)",
    borderWidth: 1.5,
    paddingLeft: 45,
    borderRadius: 100,
    paddingRight: 40,
    fontSize: 18,
    color: colors.textColor.black,
  },
  iconRight: {
    position: "absolute",
    right: 10,
    top: 18,
  },
  iconLeft: {
    position: "absolute",
    top: 18,
    left: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: colors.bgColor.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
    color: colors.textColor.black,
  },
  closeButton: {
    padding: 6,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: colors.textColor.black,
    fontSize: 16,
  },
});

export default SearchInput;
