import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./style";
import Logo from "../../components/Logo";
import FoodList from "../../components/Foodlist";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../services/api"

export default function Home() {

  useEffect(()=>{

    async function fecthApi(){
      const response = await api.get("/foods")
      setFoods(response.data)
    }
    fecthApi()
  },[])

  function handleSearch() {
    alert(`Você digitou: ${inputValue}`);
    setInputValue("")
   

  }

  const [inputValue, setInputValue] = useState("");
  const[foods, setFoods]= useState([])
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Logo />
      <Text style={styles.titulo}>Encontre a receita que combina com você</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite a receita que quer..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#46BD6A" />
        </TouchableOpacity>
      </View>

      <FlatList
      data={foods}
      keyExtractor={(item)=>String(item.id)}
      renderItem={({item})=><FoodList data={item}/>}
      showsVerticalScrollIndicator={false}

      />

    </SafeAreaView>
  );
}
