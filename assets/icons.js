import {
  Entypo,
  MaterialIcons,
  Octicons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export const icons = {
  Home: (props) => <Octicons name="home" size={24} color={props.color} />,
  MyBookings: (props) => (
    <FontAwesome5 name="calendar-week" size={24} color={props.color} />
  ),
  Club: (props) => (
    <MaterialIcons name="local-movies" size={24} color={props.color} />
  ),
  Assistent: (props) => (
    <Ionicons name="chatbox-ellipses-outline" size={24} color={props.color} />
  ),
  Default: (props) => <Entypo name="help" size={24} color={props.color} />,
};
