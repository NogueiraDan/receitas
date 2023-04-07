import { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style";
import {getFavorites} from "../../utils/storage"
import { useIsFocused } from "@react-navigation/native";
import FoodList from "../../components/Foodlist"

export default function Wishlist() {
  const [receipes, setReceipes] = useState([]);
  // Verificando se esta com foco na tela
  const isFocused = useIsFocused();

  useEffect(()=>{
    let isActive = true;
    
    if(isActive){
      getRecipes()   
     }

    async function getRecipes(){
      const result  = await getFavorites("@appreceitas");
      if(isActive){
        setReceipes(result)
      }
    }  

    // Toda vez que desmontar o componente, ou seja sair da tela, seta o valor da variavel
    return ()=>{
      isActive = false;
    }
  },[isFocused])



  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.title}>Receitas Favoritas</Text>
       {receipes.length === 0 && (
        <Text>Você nao tem receita salva...</Text>
       )}
       <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 15}}
        data={receipes}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><FoodList data={item}/>}
       />
    </SafeAreaView>
  );
}
