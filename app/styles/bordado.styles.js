import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    marginTop:10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
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

  button_bordado: {
    backgroundColor: '#d58430',
    padding: 80,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  formRow: {
    flexDirection:'column',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },

  submitButton: {
    backgroundColor: '#d58430',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
  },
  doubleColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  

  listItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  listSubText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  itemUrgente: {
  backgroundColor: '#ffebee', // Rojo claro
  borderLeftWidth: 6,
  borderLeftColor: '#d32f2f', // Rojo oscuro
  },
  itemPendiente: {
    backgroundColor: '#fff3e0', // Amarillo claro
    borderLeftWidth: 6,
    borderLeftColor: '#f57c00', // Amarillo oscuro
  },
  itemNormal: {
    backgroundColor: '#e8f5e9', // Verde claro
    borderLeftWidth: 6,
    borderLeftColor: '#43a047', // Verde oscuro
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  urgencyBadge: {
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 15,
  marginBottom: 10,
  alignSelf: 'flex-start',
},
quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  quantityButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  activeQuantityButton: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default styles;