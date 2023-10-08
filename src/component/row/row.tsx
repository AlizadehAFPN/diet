import React from 'react';
import {View} from 'react-native';
import {RowProps} from './row.props';
import {presets} from './row.presets';

export const Row = ({style, children, preset = 'default', px}: RowProps) => {
  const styles = [presets[preset], {paddingHorizontal: px}, style];
  return <View style={styles}>{children}</View>;
};
