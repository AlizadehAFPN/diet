import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Row, Text} from '../';
import {colors} from '../../Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {setRecipesModal} from '../../redux/search-slice';

const obj = {
  ricepes: 'Ricepes',
  meal: 'Meal Plans',
};

export const TopTabBar = ({state, descriptors, navigation}: any) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const onPressFilter = () => {
    if (state.index === 0) {
      dispatch(setRecipesModal(true));
    }
  };
  return (
    <View>
      <Row style={styles.container}>
        {state.routes.map(
          (route: {key: string | number; name: any}, indexState: any) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const onPress = () => {
              navigation.navigate(route.name);
            };

            return (
              <Row key={String(indexState)}>
                <Button
                  onPress={onPress}
                  style={{
                    ...styles.btn,
                    borderBottomColor:
                      state.index === indexState ? 'black' : 'transparent',
                  }}>
                  <View style={styles.tab}>
                    <Text style={styles.label} size={18}>
                      {obj[label as keyof typeof obj]}
                    </Text>
                  </View>
                </Button>
              </Row>
            );
          },
        )}
      </Row>
      <View style={styles.box}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textinput}
            value={text}
            onChangeText={textInput => setText(textInput)}
          />
          {text && (
            <Button onPress={() => setText('')}>
              <Icon name="close" size={18} color="black" />
            </Button>
          )}
          <Button
            onPress={() => onPressFilter()}
            style={{...styles.filterContainer}}>
            <Icon name="filter" size={18} color="black" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: lightTheme.blue20,
    height: 60,
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  tab: {
    alignItems: 'center',
  },
  btn: {
    borderBottomWidth: 3,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginVertical: 5,
    marginBottom: 10,
  },
  box: {
    backgroundColor: colors.lightGreen,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textinput: {
    flex: 1,
    fontSize: 14,
  },
  filterContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.green1,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
