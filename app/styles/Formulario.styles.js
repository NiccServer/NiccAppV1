import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:50,
  },
  formRow: {
    flexDirection:'column',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  productoField: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    boxSizing: 'border-box',
  },
  submitButton: {
    backgroundColor: '#d58430',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
 
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 8,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pickerItem: {
    fontSize: 14,
    paddingVertical: 4,
  },

  
});

export default styles;
