import { colors } from "../constants/Colors";

export const getStatusStyles = (status) => {
  switch (status) {
    case "ONGOING":
      return {
        gradientColors: ["#57A4BB", "#FFFF"],
        textColor: colors.textColor.blue,
      };
    case "UPCOMING":
      return {
        gradientColors: ["#FBA10A", "#FFFF"],
        textColor: "#FBA10A",
      };
    case "COMPLETED":
      return {
        gradientColors: ["#4CAF50", "#fff"],
        textColor: "green",
      };
    case "MISSED":
      return {
        gradientColors: ["#F35C27", "#fff"],
        textColor: "#F35C27",
      };
    case "CANCELLED":
      return {
        gradientColors: ["#F44336", "#fff"],
        textColor: "red",
      };
    default:
      return {
        gradientColors: ["#BDBDBD", "#E0E0E0"],
        textColor: "gray",
      };
  }
};

export const getSessionTextColor = (sessionStatus) => {
  switch (sessionStatus) {
    case "ONGOING":
      return colors.textColor.blue;
    case "PENDING":
      return "red";
    case "COMPLETED":
      return "green";
    case "REMAINING":
      return colors.textColor.Gray;
    default:
      return colors.textColor.black;
  }
};
