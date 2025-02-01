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
    marginTop:20,
  },
  formRow: {
    flexDirection:'column',
    marginBottom: 15,
  },

  doubleColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  formColumn: {
    flex: 1,
    marginRight: 10,
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

  picker:{
    borderWidth: 1,
    borderColor: '#ddd',
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
  DoubleColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  selectedDate: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10, // Adjust spacing as needed
  },

  disabledButton: {
    backgroundColor: '#ccc', // Change the color to indicate the button is disabled
  },



  // Styles of the buttoms SCREEN select_prendas

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

  fullWidthButton: {
    width: '100%', // Ocupa todo el ancho
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

  // STYLES OF ANIMATION BUTTOMS

  cardContainer:{
    flexGrow: 1,
  },

  card: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 25,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20*1.5,
    textAlign: 'center',
  },
  subCategoriesList:{
    marginTop:20,
  },

  // STYLES OF THE BUTTOMS OF SUBATEGORIES
  subCategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cartButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 18,
  },

  decrementButton: {
    backgroundColor: 'red',
  },
  incrementButton: {
    backgroundColor: 'green',
    
  },

  // STYLES TO TICKET
   ticketHeader: {
    marginBottom: 20,
    alignItems: "center",
  },
  ticketTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  ticketDetails: {
    marginBottom: 20,
  },
  ticketText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  ticketItems: {
    marginBottom: 20,
  },
  ticketSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  ticketItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  ticketItemText: {
    fontSize: 16,
    color: "#555",
  },


  // SELECT SIZE
  sizeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sizeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sizeCarousel: {
    paddingVertical: 8,
  },
  sizeItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sizeItemText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },


});

export default styles;
