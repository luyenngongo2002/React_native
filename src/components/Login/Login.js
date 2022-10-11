import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';
const Login = () => {
  const image = {
    url: 'https://reactjs.org/logo-og.png',
  };

  return (
    <View style= {styles.loginContainer} >
      <Text>fgvbbbb</Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      </ImageBackground>
  </View>
  );
};

export default Login;
