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
});
