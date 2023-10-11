import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../';
import Icon from 'react-native-vector-icons/AntDesign';
import {FilterBadgePrp} from '../../Interface';

export const FilterBadgeClose = ({item, onSelect}: FilterBadgePrp) => {
  return (
    <View style={{...styles.badge}}>
      <Text style={styles.txt} color={'white'}>
        {item.title}
      </Text>
      <Icon
        onPress={() => onSelect(item)}
        name="close"
        size={18}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 40,
    paddingHorizontal: 15,
    marginRight: 8,
    backgroundColor: 'black',
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {marginRight: 10},
});
