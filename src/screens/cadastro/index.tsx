import React, { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { InputForm } from "../../components/input/InputForm";
import { useForm } from "react-hook-form";
import { ButtonText } from "../../components/button/ButtonText";

export default function Cadastro() {
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

  function handleNextStep(data: any) {
    console.log(data);
  }

  const emailRef = useRef<TextInput>(null);
  const passwordlRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.texto}>Se você não tem uma conta, registre-se</Text>
      <Text style={styles.texto}>Você pode se registrar aqui!</Text>

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
          placeholder: "Digite seu E-mail",
          placeholderTextColor: "#71717B",
          cursorColor: "#ffff",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
      />
      <InputForm
        ref={emailRef}
        icon="user"
        error={errors.name?.message}
        fromProps={{
          control,
          name: "name",
          rules: {
            required: "Nome é obrigatório",
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

      <InputForm
       ref={passwordlRef}
        icon="lock"
        
        error={errors.passwordConfirmation?.message}
        fromProps={{
          control,
          name: "passwordConfirmation",
          rules: {
            required: "Senha invalida",
            validate: validationPasswordConfirmation
          },
        }}
        inputProps={{
          placeholder: "Confirme sua senha",
          placeholderTextColor: "#71717B",
          cursorColor: "#ffff",
          onSubmitEditing: handleSubmit(handleNextStep),
          secureTextEntry: true,
        }}
      />
      <ButtonText name="Cadastrar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
