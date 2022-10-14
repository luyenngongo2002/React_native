import {
  View,
  StyleSheet, Text
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.formLogin}>
        
          <View style={styles.formContent}>
            <Text>dfdfdff</Text>
            {/* Email and Password  */}
            <View style={styles.itemEmail}>

            </View>
            <View style={styles.itemPass}>

            </View>
          </View>
  
    </View>
  );
};
const styles = StyleSheet.create({
  formLogin: {
    flex: 1,
    backgroundColor:'red',
  },
  formContent: {
    height: 100,
    width: 100,
    backgroundColor: 'skypeblue',
    marginTop: 50,
  },
  
});

export default Login;
