import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./style";
import { useRoute} from "@react-navigation/native";
import api from "../../../services/api"
import FoodList from "../../components/Foodlist"

export default function Search() {
  const route = useRoute();
  const[receipes, setReceipes] = useState([])

  useEffect(()=>{
    async function fetchRecipes(){
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setReceipes(response.data)
    }
    fetchRecipes()
  },[route.params?.name])

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Resultados para: "{route.params?.name}"</Text>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><FoodList data={item}/>}
        ListEmptyComponent={()=><Text style={styles.emptyText}>Não encontramos resultados</Text>}
       />
    </View>
  );
}
