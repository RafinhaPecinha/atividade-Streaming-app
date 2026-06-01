import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { musicas } from "../data/musicas";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>67FM 🎧</Text>

    <Text style={styles.subtitulo}>
        Trilha sonora da resenha 💜
    </Text>

    <Text style={styles.aura}>
            +1000 Aura
    </Text>

      <TouchableOpacity
        style={styles.favoritos}
        onPress={() => router.push("/favoritos")}
      >
        <Text style={styles.textoBotao}>❤️ Favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/tocando")}
          >
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.artista}>{item.artista}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
    padding: 20,
  },

  logo: {
    color: "#A855F7",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  favoritos: {
    backgroundColor: "#A855F7",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#181818",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },

  titulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  artista: {
    color: "#aaa",
    marginTop: 5,
  },

  subtitulo: {
  color: '#aaa',
  fontSize: 16,
  marginBottom: 10,
},

aura: {
  color: '#A855F7',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
});