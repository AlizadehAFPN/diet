import {ViewStyle} from 'react-native';

const BASE: ViewStyle = {
  // justifyContent: "space-between",
  alignItems: 'center',
  flexDirection: 'row',
};

export const presets = {
  default: BASE,

  spacing: {
    ...BASE,
    paddingHorizontal: 16,
    marginVertical: 8,
  } as ViewStyle,
  side: {
    ...BASE,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
};

export type RowPresetsType = keyof typeof presets;
