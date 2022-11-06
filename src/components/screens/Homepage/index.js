import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Banner from './Banner';
import TopProducts from './TopProducts';
import AllProducts from './AllProducts';

const Homepage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Đại lý cho thuê xe</Text>
      </View>
      <View style={styles.top_product}>
        <TopProducts navigation={navigation} />
      </View>
      <View style={styles.title}>
        <Text>Thuê xe</Text>
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
    width: "100%",
    height: 25,
    left: 10,
    top: 10,
    color:"3F569C"
  },
  title_a: {
    width: 94,
    height: 25,
    top: 15,
    left: 24,
  },
  top_product: {
    height: 162,
  },

});

export default Homepage;
