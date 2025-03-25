import React, { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from './styles';
import { InputForm } from "../../components/input/InputForm";
import { useForm } from "react-hook-form";
import { ButtonText } from "../../components/button/ButtonText";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

function validationPasswordConfirmation(passwordConfirmation: String){
  const {password} = getValues();

  return password === passwordConfirmation || "As senhas devem ser iguais."
}

  function handleNextStep(){
    navigate("Inicial")
    return (
        <View style={styles.container}>
          <ButtonText name="Login" onPress={handleNextStep} />
        </View>
      );
    }

  

  const emailRef = useRef<TextInput>(null);
  const passwordlRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.texto}>Se você já tem uma conta, registre-se</Text>
      <Text style={styles.texto}>Você pode fazer Login aqui!</Text>

      <InputForm
        icon="mail"
        error={errors.email?.message}
        fromProps={{
          control,
          name: "email",
          rules: {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i,
              message: "E-mail inválido",
            },
          },
        }}
  
        inputProps={{
          placeholder: "Digite seu usuário",
          placeholderTextColor: "#71717B",
          cursorColor: "#ffff",
          onSubmitEditing: handleSubmit(handleNextStep),
          returnKeyType: "next",
        }}
      />
      <InputForm
        icon="lock"
        error={errors.password?.message}
        fromProps={{
          control,
          name: "password",
          rules: {
            required: "Senha é obrigatório",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 digitos"
            }
          },
        }}
        inputProps={{
          placeholder: "Digite sua senha",
          placeholderTextColor: "#71717B",
          cursorColor: "#ffff",
          onSubmitEditing: () => passwordlRef.current?.focus(),
          secureTextEntry: true,
          returnKeyType: "next",
        }}
      />
      <ButtonText name="Cadastrar" onPress={handleSubmit(handleNextStep)} />
          </View>
  
  );
}



