
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Layer_1.png')} style={styles.logoImg} />
        <Text style={styles.title}>Good Breach</Text>
        <Text style={styles.subtitle}>Financial freedom, simplified</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
