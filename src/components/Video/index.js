import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./style";
import {Feather} from "@expo/vector-icons"
import { WebView } from "react-native-webview"

export default function VideoView({ handleClose, videoURL }) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#FFF"/>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

        <WebView 
            source={{ uri: 'https://www.google.com' }}
            style={styles.contentView} 
        />      

    </SafeAreaView>
  );
}
