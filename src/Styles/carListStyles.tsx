import {Dimensions, StyleSheet} from 'react-native';

const {width}: {width: number} = Dimensions.get('screen');

export const carListStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 16,
  },
  carItem: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  carInfoContainer: {
    paddingLeft: 8,
    width: '50%',
    height: '100%',
    justifyContent: 'space-around',
  },
  carInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 11,
    color: 'gray',
  },
  carText: {
    width: '50%',
    textAlign: 'right',
  },
  carImage: {
    width: width / 2.5,
    height: width / 2.5,
  },
});
