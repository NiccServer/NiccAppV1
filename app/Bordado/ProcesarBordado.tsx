import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../styles/bordado.styles";
import { ProcesarBordadoRouteProp } from "../types";

const DEFAULT_QUANTITIES = [18, 15, 10, 5]; // Cantidades predefinidas

export default function ProcesarBordado() {
  const navigation = useNavigation<any>();
  const route = useRoute<ProcesarBordadoRouteProp>();
  const { id = "", escuela = "", prenda = "", total = 0, restantes = 0 } = route.params;
  const [numPrendas, setNumPrendas] = useState("");

  const handleQuantitySelect = (quantity: number) => {
    setNumPrendas(Math.min(quantity, restantes).toString());
  };

  const handleSubmit = () => {
    const prendasFinalizadas = parseInt(numPrendas, 10);

    if (isNaN(prendasFinalizadas) || prendasFinalizadas <= 0) {
      Alert.alert("Error", "Debes ingresar una cantidad válida.");
      return;
    }

    if (prendasFinalizadas > 18) {
      Alert.alert("Límite Excedido", "Máximo 18 prendas por pasada.");
      return;
    }

    if (prendasFinalizadas > restantes) {
      Alert.alert("Error", "No puedes bordar más de las prendas restantes.");
      return;
    }

    const nuevasRestantes = restantes - prendasFinalizadas;
    Alert.alert("Proceso Finalizado", `Se han bordado ${prendasFinalizadas} prendas. Restan ${nuevasRestantes}.`);
    navigation.navigate("Bordado/ListaSolicitudes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procesar Bordado</Text>
      
      <Text style={styles.label}>Escuela: {escuela}</Text>
      <Text style={styles.label}>Prenda: {prenda}</Text>
      <Text style={styles.label}>Total prendas: {total}</Text>
      <Text style={styles.label}>Prendas restantes: {restantes}</Text>

      <Text style={styles.label}>Selecciona o ingresa cantidad (máx. 18):</Text>
      
      <View style={styles.quantityContainer}>
        {DEFAULT_QUANTITIES.map((quantity) => (
          <TouchableOpacity
            key={quantity}
            style={[
              styles.quantityButton,
              numPrendas === quantity.toString() && styles.activeQuantityButton
            ]}
            onPress={() => handleQuantitySelect(quantity)}
          >
            <Text style={styles.quantityButtonText}>{quantity}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Ingresa cantidad manual"
        keyboardType="numeric"
        value={numPrendas}
        onChangeText={setNumPrendas}
        maxLength={2}
      />

      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleSubmit}
        disabled={!numPrendas}
      >
        <Text style={styles.submitButtonText}>Finalizar Bordado</Text>
      </TouchableOpacity>
    </View>
  );
}