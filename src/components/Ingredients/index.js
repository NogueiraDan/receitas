import { View, Text } from "react-native";
import {styles} from "./style"

export default function Ingredients({data}){
    return(
        <View  style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.grama}>{data.amount}</Text>
        </View>
    )
}

/*Observação interessante: Estamos usando as Props pois é uma renderização de componente, 
diferente de quando se usa o "useRoute" em paginas para pegar os parametros enviado 
para outra rota. */