import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Banner from './Banner';
import TopProducts from './TopProducts';
import AllProducts from './AllProducts';

const Homepage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Diabetic Diet</Text>
      </View>
      <View style={styles.top_product}>
        <TopProducts />
      </View>
      <View style={styles.title_a}>
        <Text>All Products</Text>
      </View>
      <View style={styles.all_product}>
       <AllProducts/>
      </View>
    </ScrollView>
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
    top: 40,
  },
  title_a: {
    width: 94,
    height: 25,
    top: 15,
    left: 24,
  },
  top_product: {
    height: 162,
    top: 25,
  },
  all_product: {
    top: 5,
   
  },
});

export default Homepage;
