import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TemplatePTIT } from './templates/templatePTIT';
//import { useError } from './error/errorContext';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const HomePage = ({ navigation }: any) => {
  //const { error, setError } = useError(); 

  const goToTemp = () => {
    navigation.navigate('tempPage')
  }

  const goToUV = () => {
    navigation.navigate('uvPage')
  }

  const goToRFID = () => {
    navigation.navigate('rfidPage')
  }
  

  return (
    <View style={styles.container}>            
      {TemplatePTIT()}
      <ThemedView style={styles.column}>
        <ThemedText type='title' style={styles.textTitle}>Project by 3 french students on internship at PTIT</ThemedText>
        <ThemedText type='subtitle' style={styles.text}>You will find the values read by the Arduino sensors</ThemedText>
        <TouchableOpacity style={styles.button} onPress={goToTemp}>
          <ThemedText style={styles.buttonText}>Temperature</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToUV}>
          <ThemedText style={styles.buttonText}>UV indice</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToRFID}>
          <ThemedText style={styles.buttonText}>RFID</ThemedText>
        </TouchableOpacity>
      </ThemedView>
        
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textTitle: {
    marginTop: 50,
    color: '#C15F05',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: '#A2441B',
    fontSize: 16, 
    textAlign: 'center',
    marginTop: 40, 
  },
  button: {
    width: 146,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#608A3F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
