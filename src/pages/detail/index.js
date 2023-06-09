import { useState, useLayoutEffect } from "react";
import { Text, View, Pressable, ScrollView, Image, Modal,Share } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import Ingredients from "../../components/Ingredients";
import Instruction from "../../components/Instruction";
import VideoView from "../../components/Video";
import {isFavorite, saveFavorites, removeFavorites} from "../../utils/storage"

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false)
  const [favorite, setFavorite] = useState(false)

  
  useLayoutEffect(() => {
    // Verificando se o item está favoritado ou não
    async function getStatusFavorite(){
      const receipeFavorite = await isFavorite(route.params?.data)
      setFavorite(receipeFavorite)
    }
    getStatusFavorite()

    // Pegando o nome da receita e setando no header
    navigation.setOptions({
      title: route.params?.data,
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
          {favorite ? (
            <Entypo name="heart" size={28} color="#FF4141" />
          ):(
            <Entypo name="heart-outlined" size={28} color="#FF4141" />
          )
          }
        </Pressable>
      ),
    });
  }, [route.params?.data, navigation, favorite]);
  
  function handleOpenVideo(){
    setShowVideo(true)
  }

  async function shareRecipe(){
    try {
      await Share.share({
        url: "https://expo.dev",
        message: `Receita: ${route.params?.data.name}`
      })
    } catch (error) {
      alert(error)
    }
  }

  async function handleFavoriteReceipe(receipe){
    if(favorite){
      await removeFavorites(receipe.id)
      setFavorite(false)
    }
    else{
      await saveFavorites("@appreceitas",receipe)
      setFavorite(true)
    }

  }
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 15 }}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>
            Ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        
        {/* Botão de compartilhar */}
        <Pressable onPress={shareRecipe}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>
      {/* Diferente do map normal, abriu e fechou () porque o intuito é retornar algo */}
      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}

      <View style={styles.instructionArea}>
        <Text style={styles.instructionText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#FFF" />
      </View>

      {/* Instruções de preparo */}
      {route.params?.data.instructions.map((item, index) => (
        <Instruction key={item.id} data={item} index={index}/>
      ))}

      {/* MODAL DE VIDEO */}
      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleClose={()=>setShowVideo(false)}
          videoURL={route.params?.data.video}
        />
      </Modal>

    </ScrollView>
  );
}
