import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  function cadastrar() {
    if (!nome || !email || !senha || !confirmar) {
      alert('Preencha todos os campos');
      return;
    }

    if (senha !== confirmar) {
      alert('As senhas não coincidem');
      return;
    }

    alert('Cadastro realizado');
    router.replace('/');
  }

  return (
  <View style={styles.container}>

    <TouchableOpacity onPress={() => router.back()}>
      <Text style={styles.voltar}>← Voltar</Text>
    </TouchableOpacity>

    <Text style={styles.titulo}>Criar Conta</Text>

    <TextInput
      placeholder="Nome"
      placeholderTextColor="#888"
      style={styles.input}
      onChangeText={setNome}
    />

    <TextInput
      placeholder="Email"
      placeholderTextColor="#888"
      style={styles.input}
      onChangeText={setEmail}
    />

    <TextInput
      placeholder="Senha"
      placeholderTextColor="#888"
      secureTextEntry
      style={styles.input}
      onChangeText={setSenha}
    />

    <TextInput
      placeholder="Confirmar senha"
      placeholderTextColor="#888"
      secureTextEntry
      style={styles.input}
      onChangeText={setConfirmar}
    />

    <TouchableOpacity style={styles.botao} onPress={cadastrar}>
      <Text style={styles.botaoTexto}>Cadastrar</Text>
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

  titulo: {
    color: '#A855F7',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
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

  voltar: {
  color: '#A855F7',
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 20,
},
});