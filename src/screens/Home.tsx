import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from './components/Participant'

import { styles } from './HomeStyles'

export function Home() {
  const participants = [
    'Camila',
    'Lívia',
    'Raquel',
    'Sabrina',
    'Rebeca',
    'Pedro',
    'Davi',
    'Nathália',
    'Suely',
    'Lourdes',
    'Adriana',
  ]

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você está removendoo o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[]}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença!
          </Text>
        )}
      />
    </View>
  )
}
