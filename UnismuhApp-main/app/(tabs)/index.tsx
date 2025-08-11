import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles'; // Import styles from a separate file

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/unismuh-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Muhammadiyah University of Makassar</Text>
        <Text style={styles.subtitle}>Blue Campus, Center of Enlightenment</Text>
        <Text style={styles.description}>
          Muhammadiyah University (Unismuh) Makassar is one of the leading private universities
          in Eastern Indonesia. Located in the city of Makassar, Unismuh is committed to
          delivering excellent, Islamic, and enlightening education.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Location</Text>
          <Text style={styles.infoText}>
            Jl. Sultan Alauddin No. 259, Makassar, South Sulawesi, Indonesia.
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Vision</Text>
          <Text style={styles.infoText}>
            To become a leading, excellent, trustworthy, and independent Islamic higher education
            institution by 2025.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
