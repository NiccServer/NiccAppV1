import React, { useState }from "react";
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from "../types";
import { ScrollView,Text,View, TextInput, TouchableOpacity} from "react-native";
import { styles } from '../styles/bordado.styles';



export default function solicitud_bordado() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [prenda, setPrenda] = useState("");
    const [posicion, setPosicion] = useState("");
    const [nombreBordado, setNombreBordado] = useState("");
    const [tamano, setTamano] = useState("");
    const [colores, setColores] = useState("");
    const [diaEntrega, setDiaEntrega] = useState("");
    const [urgencia, setUrgencia] = useState("");
    const [tallas, setTallas] = useState([""]);

  const agregarTalla = () => {
    setTallas([...tallas, ""]); // Add an empty size input
  };

  const actualizarTalla = (text: string, index: number) => {
    const nuevasTallas = [...tallas];
    nuevasTallas[index] = text; // Update specific size
    setTallas(nuevasTallas);
  };
    

    
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Solicitud de bordado</Text>

      {/* Prenda */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Prendas a bordar:</Text>
        <TextInput
          style={styles.input}
          placeholder="Prenda"
          value={prenda}
          onChangeText={setPrenda}
        />
      </View>

      {/* Posición de lienzo */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Posición de lienzo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Izquierdo, Derecho, Centro"
          value={posicion}
          onChangeText={setPosicion}
        />
      </View>

      {/* Nombre del bordado */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Nombre del bordado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del bordado"
          value={nombreBordado}
          onChangeText={setNombreBordado}
        />
      </View>

      {/* Tamaño */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Tamaño:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tamaño"
          value={tamano}
          onChangeText={setTamano}
        />
      </View>

      {/* Colores */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Colores:</Text>
        <TextInput
          style={styles.input}
          placeholder="Colores"
          value={colores}
          onChangeText={setColores}
        />
      </View>

      {/* Día de entrega */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Día de entrega:</Text>
        <TextInput
          style={styles.input}
          placeholder="Día de entrega"
          value={diaEntrega}
          onChangeText={setDiaEntrega}
        />
      </View>

      {/* Urgencia */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Urgencia:</Text>
        <TextInput
          style={styles.input}
          placeholder="Urgencia (e.g., Alta, Media, Baja)"
          value={urgencia}
          onChangeText={setUrgencia}
        />
      </View>

      {/* Agregar tallas */}
      <Text style={styles.label}>Tallas:</Text>
      {tallas.map((talla, index) => (
        <View key={index} style={styles.doubleColumnRow}>
          <TextInput
            style={styles.input}
            placeholder={`Talla ${index + 1}`}
            value={talla}
            onChangeText={(text) => actualizarTalla(text, index)}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={agregarTalla}>
        <Text style={styles.submitButtonText}>Agregar Talla</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}