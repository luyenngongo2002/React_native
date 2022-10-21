import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TopProduct from './src/components/TopProducts';
import AllProducts from './src/components/AllProducts';
import Banner from './src/components/Banner';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Diabetic Diet</Text>
      </View>
      <View style={styles.top_product}>
        <TopProduct />
      </View>
      <View style={styles.title_a}>
        <Text>All Products</Text>
      </View>
      <View style={styles.all_product}>
        <AllProducts/>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    width: 94,
    height: 25,
    left: 24,
    top: 60,
  },
  title_a: {
    width: 94,
    height: 25,
    top: 30,
  },
  top_product: {
    height: 162,
    top: 45,
  },
  all_product:{
    top: 10,
  }

});

export default App;
