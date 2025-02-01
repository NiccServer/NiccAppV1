import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose your desired icon set
import { HomeScreenNavigationProp } from '../types'; 
import { NavigationContainer } from '@react-navigation/native';
import { styles } from '../styles/bordado.styles';
import { navigate } from 'expo-router/build/global-state/routing';

export default function Bordado() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

  // Opciones de navegación (simulación de rutas)
  const options = [
    { id: 1, title: 'Solicitud de bordado', icon: 'content-cut', onPress: () => navigation.navigate('Bordado/solicitud_bordado') },
    { id: 2, title: 'Status', icon: 'more-horiz', onPress: () => alert('Navegar a Opción 2') },
    { id: 3, title: 'Inventario', icon: 'design-services', onPress: () => alert('Navegar a Opción 3') },
  ];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bordado</Text>
      {/* Botones en 2 columnas */}
      
      <View> 
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style = {styles.button_bordado}
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

