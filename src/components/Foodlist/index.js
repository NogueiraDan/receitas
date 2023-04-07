import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles} from "./style";
import {LinearGradient} from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native";

export default function FoodList({data}) {

  const navigation = useNavigation()
  function handleNavigate(){
    navigation.navigate("Detail", {data: data})
  }


  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={handleNavigate}>
      <Image
        source={{uri: data.cover}}
        style={styles.image}
      />
      <View style={styles.info}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.total_ingredients} Ingredientes | {data.time} min</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['transparent','rgba(0,0,0,0.70)', 'rgba(0,0,0,0.95)']}
      />
   
    </TouchableOpacity>
  );
}
