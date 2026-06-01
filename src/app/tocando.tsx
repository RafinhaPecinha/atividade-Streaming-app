import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Tocando() {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.back()}
      >
        <Text style={styles.textoVoltar}>←</Text>
      </TouchableOpacity>

      <View style={styles.capa}>
        <Text style={styles.capaTexto}>67</Text>
      </View>

      <Text style={styles.nome}>
        PASSO BEM SOLTO
      </Text>

      <Text style={styles.artista}>
        ATLXS
      </Text>

      <Text style={styles.aura}>
        💜 Aura: +67
      </Text>

      <Text style={styles.barra}>
        ━━━━━●━━━━━
      </Text>

      <Text style={styles.controles}>
        ⏮️ ⏸️ ⏭️
      </Text>

      <Text style={styles.favorito}>
        ❤️ Favoritar
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  botaoVoltar: {
    position: 'absolute',
    top: 60,
    left: 20,
  },

  textoVoltar: {
    color: '#A855F7',
    fontSize: 30,
    fontWeight: 'bold',
  },

  capa: {
    width: 260,
    height: 260,
    backgroundColor: '#A855F7',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  capaTexto: {
    color: '#fff',
    fontSize: 90,
    fontWeight: 'bold',
  },

  nome: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  artista: {
    color: '#aaa',
    fontSize: 18,
    marginTop: 10,
  },

  aura: {
    color: '#A855F7',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },

  barra: {
    color: '#A855F7',
    fontSize: 25,
    marginTop: 35,
  },

  controles: {
    color: '#fff',
    fontSize: 40,
    marginTop: 25,
  },

  favorito: {
    color: '#A855F7',
    fontSize: 18,
    marginTop: 30,
  },
});