import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Favoritos() {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>❤️ Favoritos</Text>

      <Text style={styles.musica}>🎵 PASSO BEM SOLTO</Text>
      <Text style={styles.musica}>🎵 MONTAGEM 67</Text>
      <Text style={styles.musica}>🎵 MORANGUETE ABACATUDO 6742</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
    padding: 20,
  },

  voltar: {
    color: "#A855F7",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  titulo: {
    color: "#A855F7",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  musica: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
  },
});