import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface TextInputComponentProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#222831",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 9,
    marginVertical: 10,
    backgroundColor: "#222831",
  },
});

export default TextInputComponent;
