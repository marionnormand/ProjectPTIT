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

  const goToHome = () => {
    navigation.navigate('homePage')
  }

  const goToDatas = () => {
    console.log('datas')
  }

  

  return (
    <View style={styles.container}>         
      {TemplatePTIT()}
      <ThemedView style={styles.column}>
        <ThemedText type='title' style={styles.textTitle}>UV indice</ThemedText>
        <ThemedText type='title' style={styles.text}>You can see the UV indice in real time from the UV indice sensor</ThemedText>
        <ThemedText style={styles.textValue}>10</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <TouchableOpacity style={[styles.buttonCancel, styles.button]} onPress={goToHome}>
          <ThemedText style={styles.buttonText}>Cancel</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonDatas, styles.button]} onPress={goToDatas}>
          <ThemedText style={styles.buttonText}>Datas</ThemedText>
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
    flex: 1,
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
  textValue: {
    color: '#A2941B',
    fontSize: 25, 
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  row: {       
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: windowHeight-700,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: 93,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    marginLeft: 20,
    backgroundColor: '#8F2424',
  },
  buttonDatas: {
    marginLeft: 100,
    backgroundColor: '#138B67',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
