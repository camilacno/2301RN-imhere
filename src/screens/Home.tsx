import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Participant } from './components/Participant'

import { styles } from './HomeStyles'

export function Home() {
  function handleAddParticipant() {
    console.log('teste')
  }

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style='auto' />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
    </View>
  )
}
