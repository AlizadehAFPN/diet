import {Platform, StyleSheet} from 'react-native';

export const carDetailStyles = StyleSheet.create({
  animationView: {
    width: 250,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  chargeScreen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  barTop: {
    marginBottom: -30,
    height: 30,
    width: 250,
  },
  barBody: {
    height: 30,
    width: 250,
  },
  barDetail: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  barShine: {
    marginBottom: -30,
    zIndex: 1,
    height: 30,
    width: 250,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 8,
  },
  containerDetail: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 16,
  },
  image: {
    width: 300,
    height: 200,
  },
  helpButton: {
    marginLeft: '5%',
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  helpButtonText: {
    color: 'white',
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '80%',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  detailLabel: {
    fontSize: 12,
    color: 'gray',
  },
  detailValue: {
    fontSize: 14,
  },
  chargeButton: {
    width: '90%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
  },
  chargeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
