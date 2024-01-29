import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nav bar</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.textHead}>Habits</Text>
        <Text style={styles.text}>Personal habit tracker</Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'left',
  },
  textHead: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700'
  },
  text: {
    fontSize: 20,
    color: 'lightgrey',
    fontWeight: '300'
  },
  header: {
    backgroundColor: '#111111',
    padding: 10
  },
});
