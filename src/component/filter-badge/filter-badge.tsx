import {StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {colors} from '../../Styles';
import {Button, Text} from '../'; // Import necessary components
import {FilterBadgePrp, tag} from '../../Interface'; // Import interfaces

export const FilterBadge = ({item, selected, onSelect}: FilterBadgePrp) => {
  // Use useMemo to compute 'isSelected' based on dependencies
  const isSelected = useMemo(
    () => selected?.find((elem: tag) => item.id === elem.id),
    [selected, item], // Include 'selected' and 'item' in the dependency array
  );

  // Dynamically set badgeStyle based on 'isSelected' state
  const badgeStyle = {
    ...styles.badge, // Use predefined styles
    backgroundColor: isSelected ? 'black' : colors.gray2, // Conditional background color
  };

  return (
    <Button onPress={() => onSelect(item)} style={badgeStyle}>
      <Text color={isSelected ? 'white' : 'black'}>{item.title}</Text>
    </Button>
  );
};

// Define styles for the FilterBadge component
const styles = StyleSheet.create({
  badge: {
    height: 40,
    paddingHorizontal: 15,
    marginRight: 8,
    backgroundColor: colors.gray2, // Default background color
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
  },
});
