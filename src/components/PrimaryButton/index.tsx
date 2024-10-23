import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  title: string;
  onPress?: () => void;
}

const PrimaryButton = (props: Props) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
