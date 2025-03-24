import { forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { styles } from './input';
import { Controller, UseControllerProps } from 'react-hook-form';

type Props = {
    icon: keyof typeof Feather.glyphMap;
    fromProps: UseControllerProps;
    inputProps: TextInputProps;
}

const InputForm = forwardRef<TextInput, Props>(({icon, fromProps, inputProps}, ref) => { 
    return (
        <Controller
            render={({field}) => (
                <View style={styles.group}>
                <Feather name={icon} size={20} color="#FFFF"/>
                <TextInput 
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                style={styles.control}
                 {...inputProps}
                 />
            </View>
            )}
            {...fromProps}
        />
  )
});

export {InputForm};