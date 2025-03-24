import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { InputForm } from '../../components/input/InputForm';
import { useForm } from 'react-hook-form';
import { ButtonText } from '../../components/button/ButtonText';

export default function Cadastro()  {
  const { control, handleSubmit } = useForm();

  function handleNextStep(data: any){
    console.log(data);
  }

  const emailRef = useRef<TextInput>(null)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.texto}>Se você não tem uma conta, registre-se</Text>
      <Text style={styles.texto}>Você pode se registrar aqui!</Text>

    <InputForm 
      icon='mail'
      fromProps={{
        name: 'email',
        control
      }}
      inputProps={
        {
          placeholder: "Digite seu email",
          placeholderTextColor: "#71717B",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: 'next'
        }}
    />
    <InputForm 
      ref={emailRef}
      icon='user'
      fromProps={{
        name: 'name',
        control
      }}
      inputProps={{
        placeholder: "Digite seu usuário",
        placeholderTextColor: "#71717B",
        onSubmitEditing: handleSubmit(handleNextStep)
      }}
    />
    <ButtonText name='Cadastrar' onPress={ handleSubmit(handleNextStep)}/>
    </View>
  );
}