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
          width: (windowWidth - 56) / 2,
        },
      ]}>
      <Image
        style={styles.picture}
        source={require('../assets/img/download.jpg')}
      />
      <View style={styles.text}>
        <Text>Accu-check Active Test </Text>
        <Text style={styles.price}>$112</Text>
      </View>
    </View>
  );

  return (
    <ScrollView >
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={DATA}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    alignItems: 'center',
    marginTop: 10,
    height: 170,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  picture: {
    width: 180,
    height: 120,
  },
  text: {
    margin: 5,
  },
  price: {
    alignSelf: 'center',
  },
});
export default TopProducts;
