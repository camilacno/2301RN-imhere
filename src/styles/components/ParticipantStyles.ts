import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#E23C44',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: 36,
    width: '100%',
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    flex: 1,
    height: 56,
    marginRight: 12,
    padding: 16,
    fontSize: 16,
  },
})
