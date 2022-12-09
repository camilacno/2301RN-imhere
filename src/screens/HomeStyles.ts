import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    flex: 1,
    fontSize: 16,
    height: 56,
    marginRight: 12,
    padding: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#31CF67',
    borderRadius: 5,
    height: 56,
    width: 56,

    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: 36,
    width: '100%',
  },
})
