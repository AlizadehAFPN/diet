import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../'; // Import the Text component from the appropriate location
import Icon from 'react-native-vector-icons/AntDesign';
import {FilterBadgePrp} from '../../Interface'; // Import the FilterBadgePrp interface

// FilterBadgeClose component to display a badge with a close icon
export const FilterBadgeClose = ({item, onSelect}: FilterBadgePrp) => {
  return (
    <View style={{...styles.badge}}>
      {/* Display the title in white text */}
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

// Styles for the FilterBadgeClose component
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
