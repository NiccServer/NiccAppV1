import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles/Formulario.styles';



// Define interface for product
interface Producto {
  id: number;
  nombre: string;
}

export default function TabTwoScreen() {
  // Estado para el formulario
  const [cantidad, setCantidad] = useState('');
  const [costo, setCosto] = useState('');
  const [detalle, setDetalle] = useState('');
  const [color, setColor] = useState('');
  const [productosDisponibles] = useState<Producto[]>([
    { id: 1, nombre: 'Tela'},
    { id: 2, nombre: 'Habilitación'},
    { id: 3, nombre: 'Papeleria'},
  ]);
  
  // Change to string to match Picker's expected type
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
 

  // Función para manejar el envío
  const handleSubmit = () => {
    // Validaciones
    if (!productoSeleccionado || !cantidad || !costo) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    
    // Encontrar el producto seleccionado
    const producto = productosDisponibles.find(
      p => p.id.toString() === productoSeleccionado
    );

    // Ejemplo de procesamiento
    alert(`Formulario enviado:
      Producto: ${producto ? producto.nombre : 'No seleccionado'}
      Cantidad: ${cantidad}
      Costo Total: ${producto ? (parseFloat(cantidad)).toFixed(2) : '0'}
    `);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario de Producto</Text>

      {/* Selección de Producto */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Producto:</Text>
        <Picker
          selectedValue={productoSeleccionado}
          onValueChange={(itemValue: string) => setProductoSeleccionado(itemValue)}
          style={styles.pickerItem}
        >
          <Picker.Item label="Seleccione un producto" value="" />
          {productosDisponibles.map((producto) => (
            <Picker.Item
              key={producto.id}
              label={producto.nombre}
              value={producto.id.toString()}
            />
          ))}
        </Picker>
      </View>

      {/* Campos Condicionales */}
      {productoSeleccionado === '1' && (
        <>
          {/* Campo de color */}
            <View style={styles.formRow}>
              <Text style={styles.label}>Color:</Text>
              <TextInput
                style={styles.input}
                placeholder='Color'
                value={color}
                onChangeText={setColor}
              />
            </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Tipo de Tela:</Text>
            <TextInput
              style={styles.input}
              placeholder="Detalles"
              value={detalle}
              onChangeText={setDetalle}
            />
          </View>
        </>
      )}


      {/* Campo de Costo */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Costo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Costo"
          keyboardType="numeric" // Configuración para el teclado numérico
          value={costo}
          onChangeText={setCosto}
        />
      </View>
      {/* Campo de Cantidad */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Cantidad:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Cantidad"
          value={cantidad}
          onChangeText={setCantidad}
        />
      </View>


      {/* Botón Enviar */}
       <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

