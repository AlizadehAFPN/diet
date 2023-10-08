import {StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {colors} from '../../Styles';
import {Button, Text} from '../';

export function FilterBadge({label, selected, onSelect}: any) {
  const isSelected = useMemo(
    () => selected?.find((item: any) => item === label),
    [selected, label], // Include 'label' in the dependency array
  );
  return (
    <Button
      onPress={() => onSelect(label)}
      style={{
        ...styles.badge,
        backgroundColor: isSelected ? 'black' : colors.gray2,
      }}>
      <Text color={isSelected ? 'white' : 'black'}>{label}</Text>
    </Button>
  );
}

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
