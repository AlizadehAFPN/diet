import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CarInfo} from '../Interface';
import {carListStyles} from '../Styles/carListStyles';

interface CarListItemProps {
  item: CarInfo;
  onPressCar: (id: number) => void;
  testID?: string; // Add the testID prop
}

export const CarListItem: React.FC<CarListItemProps> = ({item, onPressCar}) => {
  return (
    <TouchableOpacity
      testID={`post-row-${item.id}`}
      onPress={() => onPressCar(item?.id)}
      style={carListStyles.carItem}>
      <View style={carListStyles.carInfoContainer}>
        <View testID={'Brand-1'} style={carListStyles.carInfoRow}>
          <Text style={carListStyles.labelText}>Brand:</Text>
          <Text>{item?.brand}</Text>
        </View>
        <View style={carListStyles.carInfoRow}>
          <Text style={carListStyles.labelText}>Model:</Text>
          <Text style={carListStyles.carText}>{item?.model}</Text>
        </View>
        <View style={carListStyles.carInfoRow}>
          <Text style={carListStyles.labelText}>Version:</Text>
          <Text>{item?.version}</Text>
        </View>
        <View style={carListStyles.carInfoRow}>
          <Text style={carListStyles.labelText}>Category:</Text>
          <Text>{item?.category}</Text>
        </View>
      </View>
      <FastImage
        style={carListStyles.carImage}
        source={{
          uri: item.imageUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};
