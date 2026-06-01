import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    router.push('/home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎧 67FM ⁶🤷🏻‍♀️⁷</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={styles.link}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    color: '#A855F7',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#181818',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#A855F7',
    padding: 15,
    borderRadius: 12,
  },

  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  link: {
    color: '#A855F7',
    textAlign: 'center',
    marginTop: 20,
  },
});