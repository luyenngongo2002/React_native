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
  ];

  const windowWidth = Dimensions.get('window').width;
  const renderItem = () => (
    <View
      style={[
        styles.item,
        {
          width: (windowWidth - 46) / 2,
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
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    alignItems: 'center',
    margin: 10,
    height: 180,
  },
  picture: {
    top: 10,
    width: 100,
    height: 150,
  },
});
export default TopProducts;
