import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import PrimaryButton from '../../components/PrimaryButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="About" />

      <AppTextInput placeholder="Name" />

      <PrimaryButton title="Next" />
    </View>
  );
};

export default HomeScreen;
