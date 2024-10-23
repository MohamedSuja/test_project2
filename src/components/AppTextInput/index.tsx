import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {ColorSheet} from '../../utils/ColorSheet';

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const AppTextInput = (props: Props) => {
  const {style, placeholder, value, onChangeText} = props;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholderTextColor={ColorSheet.Text}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default AppTextInput;
