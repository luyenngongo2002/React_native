import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/download.jpg')}
        />
        <View style={styles.title}>
          <Text style={styles.title_main}>Ngo Thi Luyen</Text>
          <Text style={styles.title_main}>PNV23B</Text>
        </View>
      </View>
      <View style={styles.items}>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
            <Icon name="pencil-square-o" size={25} color="black" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Private Account</Text>
          </View>
          <View style={styles.iconRight}>
            <Icon name="chevron-right" size={15} color="black" />
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
            <Icon name="gears" size={25} color="black" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Faq</Text>
          </View>
          <View style={styles.iconRight}>
            <Icon name="chevron-right" size={15} color="black" />
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
            <Icon name="lemon-o" size={25} color="black" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My Consults</Text>
          </View>
          <View style={styles.iconRight}>
            <Icon name="chevron-right" size={15} color="black" />
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.iconLeft}>
            <Icon name="certificate" size={25} color="black" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>My orders</Text>
          </View>
          <View style={styles.iconRight}>
            <Icon name="chevron-right" size={15} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    top: 30,
  },
  logo: {
    width: 75,
    height: 75,
    left: 23,
    borderRadius: 63,
    borderWidth: 4,
  },
  title: {
    marginLeft: 50,
    margin: 20,
  },
  profile: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  iconLeft: {
    flex: 1,
  },
  infoContent: {
    flex: 1,
  },
  items:{
    marginTop: 30,
  }
});

export default Profile;
