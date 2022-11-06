import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import React from 'react';

const AllProducts = () => {
  const DATA = [
    {
      id: '1',
      title: 'SHonda SH 2022',
      desc: 'Cách trung tâm 30 km',
      price: 'VND 100.000/ngày',
      img: require('../../../assets/img/car1.jpg'),
    },
    {
      id: '2',
      title: 'Honda SH 2022',
      desc: 'Cách trung tâm 30 km',
      price: 'VND 100.000/ngày',

      img: require('../../../assets/img/car2.jpg'),
    },
    {
      id: '3',
      title: 'Honda SH 2022',
      desc: 'Cách trung tâm 30 km',
      price: 'VND 100.000/ngày',

      img: require('../../../assets/img/car3.jpg'),
    },
    {
      id: '4',
      title: 'SHonda SH 2022',
      desc: 'Cách trung tâm 30 km',
      price: 'VND 100.000/ngày',

      img: require('../../../assets/img/car4.jpg'),
    },
    {
      id: '5',
      title: 'Honda SH 2022',
      img: require('../../../assets/img/car4.jpg'),
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
      <View style={styles.packet}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>

        <View style={styles.buttonStyle}>
          <Button title={'Đặt'}></Button>
        </View>
      </View>
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
    height: 160,
    marginBottom: 40,
   
  },
  picture: {
    width: 180,
    height: 130,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  desc: {
    fontSize: 10,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontSize: 8,
    color: 'red',
  },
  buttonStyle: {
    height: 40,
    width: 70,
    fontSize: 10,
    margin: 10,
   
    
  },
  packet:{
    flexDirection: "row",
    flex: 1
  }
});
export default AllProducts;
