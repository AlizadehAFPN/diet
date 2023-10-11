import React, {FunctionComponent} from 'react';
import {ViewStyle, View} from 'react-native';
import {DividerProps} from '../../Interface';

export const Divider: FunctionComponent<DividerProps> = ({style, height}) => {
  const dividerStyle: ViewStyle = {
    width: '100%', // Specify the type explicitly
    height: height || 20,
  };

  return <View style={[dividerStyle, style]} />;
};
