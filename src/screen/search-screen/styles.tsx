import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../Styles';

export const stylesTab = StyleSheet.create({
  container1: {
    flex: 1,
  },
  paddingWidth: {
    paddingHorizontal: 16,
  },
  stack: {
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: colors.lightGreen,
  },
  cartRecipe: {
    backgroundColor: 'white',
    paddingTop: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  box: {
    backgroundColor: colors.lightGreen,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tabbar: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
  },
  tab: {
    paddingHorizontal: 16,
    height: 60,
    justifyContent: 'center',
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: Dimensions.get('window').width / 3,
    backgroundColor: colors.text,
  },
  container: {
    width: Dimensions.get('window').width,
  },
  flashStyle: {
    paddingHorizontal: 16,
  },
  cart: {
    flex: 1,
    paddingTop: 16,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  fc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray2,
  },
  screen: {
    paddingHorizontal: 16,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonModal: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 50,
    bottom: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
