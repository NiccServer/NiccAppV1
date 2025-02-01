import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  imageWrapper: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default styles;

