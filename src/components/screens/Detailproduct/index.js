import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Banner from './Banner';


const Detailproduct = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sugar Free Gold Low Calories</Text>
      <View>
        <Banner/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    top:20,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Detailproduct;
