import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/toma_tallas.styles';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types'; 
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";


export default function toma_tallas() {
  // Estado para el formulario
  const navigation = useNavigation<HomeScreenNavigationProp>();


  const [nombre, setNombre] = useState('');
  const [turno, setTurno] = useState('');
  const [semestre, setSemestre] = useState('');



  // DateSelector Picker
  const [fecha, setFecha] = useState("");
  const [showPicker, setShowPicker] = useState(false); // Control visibility of the picker
  const [selectedDate, setSelectedDate] = useState(new Date()); // Store selected date

  // Dynamic Phone Number Inputs
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([""]); // Initial phone number state
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to disable the button

  const addPhoneNumberField = () => {
    if (!isButtonDisabled) {
      setPhoneNumbers([...phoneNumbers, ""]); // Add a new empty input
      setIsButtonDisabled(true); // Disable the button after it's pressed
    }
  };

  const updatePhoneNumber = (text: string, index: number) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = text; // Update specific input
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleConfirm = (event: DateTimePickerEvent, date?: Date) => {
  if (event.type === "set" && date) {
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    setFecha(formattedDate); // Set selected date
    setSelectedDate(date); // Update state with the chosen date
  }
  setShowPicker(false); // Hide the picker

};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nueva Orden de Uniforme</Text>
      {/* Fecha */}
      <View> 
        <Text style={styles.label}>Fecha:</Text>
      </View>
      <View style={styles.doubleColumnRow}>
        <View style={styles.formColumn}>
            {/* Show Selected Date */}
            <Text style={styles.selectedDate}>{fecha || "No seleccionada"}</Text>

            {/* Open Date Picker */}
            <TouchableOpacity style={styles.submitButton} onPress={() => setShowPicker(true)}>
              <Text style={styles.submitButtonText}>Seleccionar Fecha</Text>
            </TouchableOpacity>

            {/* Date Picker Component */}
            {showPicker && (
              <DateTimePicker
                value={selectedDate} // Initial date
                mode="date" // Show calendar
                display={Platform.OS === "ios" ? "spinner" : "default"} // Style
                onChange={handleConfirm} // Use the updated handler
              />
            )}
          </View>
        <View style={styles.formColumn}>
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={() => {
              const today = new Date();
              const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
              setFecha(formattedDate);
            }}
          >
            <Text style={styles.submitButtonText}>Hoy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Nombre del alumno */}
      <View style={styles.formRow}>
        <Text style={styles.label}>Nombre del alumno:</Text>
        <TextInput
          style={styles.input}
          placeholder='Nombre del alumno'
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
      

      {/* Teléfono */}

      <Text style={styles.label}>Teléfonos:</Text>
      {phoneNumbers.map((phone, index) => (
        <View key={index} style={styles.doubleColumnRow}>
          <View style={styles.formColumn}>
            <TextInput
              style={styles.input}
              placeholder={`Teléfono ${index + 1}`}
              value={phone}
              onChangeText={(text) => updatePhoneNumber(text, index)}
              keyboardType="numeric"
            />
          </View>
          {/* Add button only for the last input */}
          {index === phoneNumbers.length - 1 && (
            <View style={styles.formColumn}>
              <TouchableOpacity
                style={[styles.submitButton, isButtonDisabled && styles.disabledButton]}
                onPress={addPhoneNumberField}
                disabled={isButtonDisabled}
              >
                <Text style={styles.submitButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}


        {/* Turno and Semestre in the same row */}
      <View style={styles.doubleColumnRow}>
        <View style={styles.formColumn}>
          <Text style={styles.label}>Turno:</Text>
          <Picker
            selectedValue={turno}
            onValueChange={setTurno}
            style={styles.picker}
          >
            <Picker.Item label="Matutino" value="Matutino" />
            <Picker.Item label="Vespertino" value="Vespertino" />
          </Picker>
        </View>
        <View style={styles.formColumn}>
          <Text style={styles.label}>Semestre:</Text>
          <Picker
            selectedValue={semestre}
            onValueChange={setSemestre}
            style={styles.picker}
          >
            <Picker.Item label="1ro" value="1" />
            <Picker.Item label="2do" value="2" />
            <Picker.Item label="3ro" value="3" />
            <Picker.Item label="4to" value="4" />
            <Picker.Item label="5to" value="5" />
            <Picker.Item label="6to" value="6" />
          </Picker>
        </View>
      </View>

      {/* Botón Confirmar Datos */}
      <TouchableOpacity style={styles.submitButton}
      onPress={() => navigation.navigate('Toma_Tallas/select_prendas')}>
        <Text style={styles.submitButtonText}> Confirmar Datos </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
