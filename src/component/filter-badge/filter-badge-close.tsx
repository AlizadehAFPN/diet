import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Text} from '../';
// import CloseIcon from '../../assets/svg/close-out.svg'
export function FilterBadgeClose({label, onSelect}: any) {
  //   const isSelected = useMemo(()=> selected?.find(item=> item==label), [selected])
  return (
    <Button onPress={() => onSelect(label)} style={{...styles.badge}}>
      <Text style={styles.txt} color={'white'}>
        {label}
      </Text>
      {/* <CloseIcon fill="white" width={20} height={20} /> */}
    </Button>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 30,
    paddingHorizontal: 15,
    marginRight: 8,
    backgroundColor: 'black',
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {marginRight: 10},
});
