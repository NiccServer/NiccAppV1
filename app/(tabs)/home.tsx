import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose your desired icon set
import { HomeScreenNavigationProp } from '../types'; 
import { NavigationContainer } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

  // Obtener la hora actual para mostrar "Buenos días", "Buenas tardes" o "Buenas noches"
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días Nicolás';
    if (hour < 18) return 'Buenas tardes Nicolás';
    return 'Buenas noches';
  };

  // Opciones de navegación (simulación de rutas)
  const options = [
    { id: 1, title: 'Corte', icon: 'content-cut', onPress: () => alert('Navegar a Opción 1') },
    { id: 2, title: 'Bordado', icon: 'more-horiz', onPress: () => navigation.navigate('Bordado/Bordado') },
    { id: 3, title: 'Diseño', icon: 'design-services', onPress: () => alert('Navegar a Opción 3') },
    { id: 4, title: 'Toma de tallas', icon: 'straighten', onPress: () => navigation.navigate('Toma_Tallas/toma_tallas') },
    { id: 5, title: 'Requisiciones', icon: 'list-alt', onPress: () => navigation.navigate('product_form') },
    { id: 6, title: 'Opción 6', icon: 'more-horiz', onPress: () => alert('Navegar a Opción 6') },
  ];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Mensaje de Bienvenida */}
      <Text style={styles.title}>{getGreeting()}</Text>
      <Text style={styles.subtitle}>¡Bienvenido! Selecciona una opción:</Text>
      {/* Botones en 2 columnas */}
      <View style={styles.buttonContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.button}
            onPress={option.onPress}
          >
            <Icon name={option.icon} size={24} color="#fff"/>
            <Text style={styles.buttonText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:50,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que los botones se muevan a la siguiente fila
    justifyContent: 'space-between',
  },
  button: {
    width: '48%', // 2 columnas
    backgroundColor: '#d58430',
    paddingVertical: 50,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Sombra en Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
