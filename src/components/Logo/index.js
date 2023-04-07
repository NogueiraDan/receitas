import { View, Text } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Logo() {
  return (
      <View style={styles.logoArea}>
        <Text style={styles.logo}>Receita Fácil</Text>
      </View>
  );
}
