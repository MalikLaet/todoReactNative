import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles'
import { ButtonText } from '../../components/button/ButtonText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro:undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<NavigationProp>(); 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>StudyPlanner</Text>
      <ButtonText name="Login" onPress={() => navigation.navigate('Login')} />
      <ButtonText name="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}
