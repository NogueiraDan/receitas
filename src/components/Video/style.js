import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%"        
    },
    backButton:{
        width: "100%",
        backgroundColor: "#4cbe6c",
        height: 48,
        flexDirection:"row",
        alignItems: "center",
        paddingStart: 15
    },
    backText:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 15
    },
    contentView:{
        flex: 1,
        width: "100%",
    }
})

export {styles}