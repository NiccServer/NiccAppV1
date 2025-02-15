import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/bordado.styles";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Datos de ejemplo actualizados
const dummyRequests = [
  { 
    id: "1", 
    escuela: "CBTIS 252", 
    prenda: "Playera", 
    total: 50, 
    restantes: 50,
    fechaEntrega: "2025-12-20", // Fecha en formato YYYY-MM-DD
    urgencia: "urgente"
  },
  { 
    id: "2", 
    escuela: "2 octubre", 
    prenda: "Chamarra Universitaria", 
    total: 30, 
    restantes: 18,
    fechaEntrega: "2025-12-25",
    urgencia: "pendiente"
  },
  { 
    id: "3", 
    escuela: "CETIS 22", 
    prenda: "Chamarra", 
    total: 40, 
    restantes: 22,
    fechaEntrega: "2025-02-15",
    urgencia: "pendiente"
  },
];

// Función para determinar el color del item
const getItemStyle = (fechaEntrega: string, urgencia: string) => {
  const today = new Date();
  const deliveryDate = new Date(fechaEntrega);
  
  // Ajuste para ignorar la hora y comparar solo fechas
  today.setHours(0, 0, 0, 0);
  deliveryDate.setHours(0, 0, 0, 0);
  
  const diffDays = Math.ceil((deliveryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

  if (urgencia === "urgente") return styles.itemUrgente;
  if (urgencia === "pendiente" || diffDays <= 2) return styles.itemPendiente;
  if (diffDays <= 5) return styles.itemPendiente; // Amarillo para 3-5 días
  return styles.itemNormal;
};

export default function ListaSolicitudes() {
  type ListaSolicitudesNavigationProp = StackNavigationProp<RootStackParamList, 'ListaSolicitudes'>;
  const navigation = useNavigation<ListaSolicitudesNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes de Bordado</Text>

      <FlatList
        data={dummyRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[getItemStyle(item.fechaEntrega, item.urgencia), styles.listItem]} // Orden invertido
            onPress={() => navigation.navigate("Bordado/ProcesarBordado", { ...item })}>
            <View style={styles.itemHeader}>
              <Text style={styles.listText}>
                {item.escuela} - {item.prenda}
              </Text>
              
            </View>
            <View style={[
                styles.urgencyBadge,
                item.urgencia === "urgente" && { backgroundColor: '#d32f2f' },
                item.urgencia === "pendiente" && { backgroundColor: '#f57c00' }
              ]}>
                <Text style={{ color: 'white', fontSize: 12 }}>
                  {item.urgencia.toUpperCase()}
                </Text>
              </View>
            <Text style={styles.listSubText}>
              📅 Entrega: {item.fechaEntrega}
            </Text>
            <Text style={styles.listSubText}>
              🧺 {item.restantes}/{item.total} prendas restantes
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}