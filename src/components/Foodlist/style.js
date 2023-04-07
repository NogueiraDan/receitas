import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  info: {
    position: "absolute",
    bottom: 14,
    left: 14,
    zIndex: 99,
  },
  name: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  description: {
    color: "#FFF",
  },
  gradient:{
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    borderRadius: 15,
    zIndex: 1,
    backgroundColor: "transparent"
  }
});

export { styles };
