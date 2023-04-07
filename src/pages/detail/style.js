import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    paddingTop: 15,
    paddingEnd: 15,
    paddingStart: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  cover: {
    height: 200,
    borderRadius: 15,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5
  },
  ingredientsText:{
    marginBottom: 15,
    fontSize: 16,
  },
  headerDetails:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 15  
  },
  instructionArea:{
    backgroundColor:'#4cbe6c',
    flexDirection: "row",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15
  },
  instructionText:{
    fontSize: 18,
    fontWeight: 500,
    color: "#FFF",
    marginRight: 8
  }
});

export { styles };
