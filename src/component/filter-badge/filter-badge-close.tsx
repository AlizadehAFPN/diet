import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../';
import Icon from 'react-native-vector-icons/AntDesign';
export function FilterBadgeClose({label, onSelect}: any) {
  return (
    <View style={{...styles.badge}}>
      <Text style={styles.txt} color={'white'}>
        {label}
      </Text>
      <Icon
        onPress={() => onSelect(label)}
        name="close"
        size={18}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 30,
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
