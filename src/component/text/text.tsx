import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {presets} from './text.presets';
import {TextProps} from './text.props';
// import { translate } from "../../i18n"
import {colors} from '../../Styles';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  const content = text || children;

  const styles = [
    {
      color: props.color ? props.color : colors.text,
      fontSize: props.size,
      marginHorizontal: props.mx,
    },
    styleOverride,
  ];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
