import { View, Text } from "react-native";
import { styles } from "./style";

export default function Instruction({data, index }){
    return(
        <View style={styles.container}> 
            <Text style={{fontWeight:"bold", fontSize:18}}>{index+1}: </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}