import React from 'react';
import {View, Text} from 'react-native';
import {carDetailStyles} from '../Styles/carDetailStyles';

export const renderDetail = (label: string, value: string) => (
  <View style={carDetailStyles.detailRow}>
    <Text style={carDetailStyles.detailLabel}>{label}:</Text>
    <Text style={carDetailStyles.detailValue}>{value}</Text>
  </View>
);
