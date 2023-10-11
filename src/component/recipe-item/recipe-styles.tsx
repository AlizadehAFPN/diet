import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../Styles/colors';

const {width} = Dimensions.get('window');

export const Recipestyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconClock: {marginRight: 8},
  img: {width: width / 3, height: width / 3},
  imgContainer: {
    width: width / 3,
    aspectRatio: 1,
    borderRadius: 5,
    overflow: 'hidden',
    // backgroundColor: colors.gray2,
  },
  middelview: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: width / 3,
  },
  moreButton: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: colors.gray2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 15,
    backgroundColor: colors.gray3,
    marginHorizontal: 8,
  },
  outerBadge: {
    width: 30,
    height: 30,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'blue',
    position: 'absolute',
    left: 8,
    bottom: 8,
  },
  innerBadge: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#FFB800',
    justifyContent: 'center',
  },
});
