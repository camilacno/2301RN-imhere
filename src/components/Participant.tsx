import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './ParticipantStyles'

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Camila Nepomuceno</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
