import {StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {colors} from '../../Styles';
import {Button, Text} from '../';
import {FilterBadgePrp, tag} from '../../Interface';

export const FilterBadge = ({item, selected, onSelect}: FilterBadgePrp) => {
  const isSelected = useMemo(
    () => selected?.find((elem: tag) => item.id === elem.id),
    [selected, item], // Include 'label' in the dependency array
  );

  const badgeStyle = {
    ...styles.badge,
    backgroundColor: isSelected ? 'black' : colors.gray2,
  };

  return (
    <Button onPress={() => onSelect(item)} style={badgeStyle}>
      <Text color={isSelected ? 'white' : 'black'}>{item.title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 40,
    paddingHorizontal: 15,
    marginRight: 8,
    backgroundColor: colors.gray2,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
  },
});
