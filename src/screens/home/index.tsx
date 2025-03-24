import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles'
import { ButtonText } from '../../components/button/ButtonText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




export  function Home() {
  const { navigate } = useNavigation(); 

  function handleNextStepRegister(){
    navigate("Cadastro")
  }
  function handleNextStepLogin(){
    navigate("Login")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>StudyPlanner</Text>
      <ButtonText name="Cadastro" onPress={handleNextStepRegister} />
      <ButtonText name="Login" onPress={handleNextStepLogin} />
    </View>
  );
}
