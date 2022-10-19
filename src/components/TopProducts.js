import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const TopProducts = () => {
  const DATA = [
    {
      id: '1',
      title: 'Second Item',
    },
    {
      id: '2',
      title: 'Third Item',
    },
    {
      id: '3',
      title: 'First Item',
    },
    {
      id: '4',
      title: 'Second Item',
    },
    {
      id: '5',
      title: 'Third Item',
    },
  ];
  const renderItem = () => (
    <View
      style={[
        styles.item,
        {
          width: (windowWidth - 56) / 2,
          backgroundColor: 'red',
        },
      ]}>
      <Image
        style={styles.picture}
        source={require('../assets/img/download.jpg')}
      />
      <Text>Image1</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <View style={styles.item}>
              <Image
                style={styles.picture}
                source={require('../assets/img/download.jpg')}
              />
              <Text>Image1</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  picture: {
    width: 149,
    height: 100,
  },
});
export default TopProducts;
