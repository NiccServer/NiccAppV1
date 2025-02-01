import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { styles } from "../styles/toma_tallas.styles";

export default function Ticket() {
  // Access route params
  const route = useRoute<RouteProp<RootStackParamList, "Toma_Tallas/ticket">>();
  const { selectedItems } = route.params || { selectedItems: [] };

  // Generate ticket details
  const folio = Math.floor(100000 + Math.random() * 900000); // Random 6-digit folio
  const date = new Date().toLocaleDateString(); // Current date
  const num_vendedor= "UR202025"
  const name = "Angel"; // Example name; replace with dynamic data if available

  const handlePress = () => {
    Alert.alert(
      '¡Gracias!',
      'Gracias por comprar, te ganaste unos bsos preciosa',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Ticket Header */}
      <View style={styles.ticketHeader}>
        <Text style={styles.ticketTitle}>Ticket de Compra</Text>
      </View>

      {/* Ticket Details */}
      <View style={styles.ticketDetails}>
        <Text style={styles.ticketText}>Nombre: {name}</Text>
        <Text style={styles.ticketText}>IdVendedor: {num_vendedor}</Text>
        <Text style={styles.ticketText}>Folio: {folio}</Text>
        <Text style={styles.ticketText}>Fecha: {date}</Text>
      </View>

      {/* Selected Items */}
      <View style={styles.ticketItems}>
        <Text style={styles.ticketSubtitle}>Prendas Seleccionadas:</Text>
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <View key={index} style={styles.ticketItem}>
              <Text style={styles.ticketItemText}>
                {item.count} x {item.subCategory}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.ticketText}>No se seleccionaron prendas.</Text>
        )}
      </View>

      {/* Footer */}
      <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
        <Text style={styles.submitButtonText}>Finalizar / Imprimir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}