import { Text } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { View  } from "moti";

export default function Logo() {
  return (
    <SafeAreaView>
      <View
        style={styles.logoArea}
        from={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: "timing",
          duration:700,
        }}
      >
        <Text style={styles.logo}>Receita Fácil</Text>
      </View>
    </SafeAreaView>
  );
}
