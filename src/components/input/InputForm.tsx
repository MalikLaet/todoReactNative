import { forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { styles } from './input';
import { Controller, UseControllerProps } from 'react-hook-form';
import clsx from 'clsx';

type Props = {
    error: string,
    icon: keyof typeof Feather.glyphMap;
    fromProps: UseControllerProps;
    inputProps: TextInputProps;
}

const InputForm = forwardRef<TextInput, Props>(({icon, fromProps, inputProps, error = ''}, ref) => { 
    return (
        <Controller
            render={({field}) => (
                <View>
                <View style={styles.group}>
                <Feather
                    name={icon}
                    size={20}
                    color={clsx({
                        ["#DC1637"]: error.length > 0,
                        ["#C10C99"]: (field.value && error.length === 0),
                        ["#FFF"]: (error.length === 0 && !field.value)
                    })}

                   />
                
                <TextInput 
                aria-label='email'
                style={styles.inputText}
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                 {...inputProps}
                 />
            </View>
            {
                error.length > 0 &&
            <Text style={styles.erro}>
                {error}
            </Text>
            }
        </View>
            )}
            {...fromProps}
        />
  )
});

export {InputForm};