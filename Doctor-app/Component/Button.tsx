import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import React from 'react';


interface CustomButton {
    title: string;
    onpress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<CustomButton> = ({ title, onpress, buttonStyle, titleStyle, icon, iconPosition = 'left' }) => {
  return (
     <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onpress}>
        {icon && iconPosition === 'left' && icon}
        <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
        {icon && iconPosition === 'right' && icon}
     </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent :'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 8,
    },
});
