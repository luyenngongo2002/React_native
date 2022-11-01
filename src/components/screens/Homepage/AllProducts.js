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

const AllProducts = () => {
  const DATA = [
    {
      id: '1',
      title: 'Second Item',
      img: require('../../../assets/img/image133.png'),
    },
    {
      id: '2',
      title: 'Third Item',
      img: require('../../../assets/img/image20.png'),
    },
    {
      id: '3',
      title: 'First Item',
      img: require('../../../assets/img/image135.png'),
    },
    {
      id: '4',
      title: 'Second Item',
      img: require('../../../assets/img/image23.png'),
    },
    {
      id: '5',
      title: 'Third Item',
      img: require('../../../assets/img/image20.png'),
    },
    
  ];

  const windowWidth = Dimensions.get('window').width;
  const renderItem = ({item}) => (
    <View
      style={[
        styles.item,
        {
          width: (windowWidth - 56) / 2,
        },
      ]}>
      <Image style={styles.picture} source={item.img} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
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
    height: 160,
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
    width: 100,
    height: 100,
    marginTop: 20,
  },
  text: {
    margin: 5,
  },
  price: {
    alignSelf: 'center',
  },
});
export default AllProducts;
