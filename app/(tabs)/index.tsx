import React, { useState } from 'react';
import { Image, TextInput, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { styles } from '../styles/HomeScreen.styles';

export default function HomeScreen() {
  // Estados para email y contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función de manejo del login
  const handleLogin = () => {
    if (email === 'corte@niccsport.com' && password === '1234') {
      Alert.alert('Login exitoso', '¡Bienvenido!');
    } else {
      Alert.alert('Error', 'Email o contraseña incorrectos');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('../../assets/logos/logo-nicc.png')} 
      />
      <ThemedText type="title" style={styles.title}>
        Bienvenido <HelloWave />
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </ThemedView>
  );
}
