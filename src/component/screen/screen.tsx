import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScreenProps} from './screen.props';
import {offsets, presets} from './screen.presets';
// import { colors } from "../../theme"

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar
        backgroundColor={props.statusbarBackgroundColor}
        barStyle={props.statusBar || 'light-content'}
      />
      {!props.unsafe && (
        <View
          style={{
            height: insets.top,
            backgroundColor: props.statusbarBackgroundColor,
          }}
        />
      )}
      <View style={[preset.inner, style]}>{props.children}</View>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? {backgroundColor: props.backgroundColor}
    : {backgroundColor: 'white'};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar
        backgroundColor={props.statusbarBackgroundColor}
        barStyle={props.statusBar || 'light-content'}
      />
      {!props.unsafe && (
        <View
          style={{
            height: insets.top,
            backgroundColor: props.statusbarBackgroundColor,
          }}
        />
      )}
      <View style={[preset.outer, backgroundStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={
            props.keyboardShouldPersistTaps || 'handled'
          }
          // refreshControl={props.onRefresh ?
          //   <RefreshControl
          //     refreshing={props.refreshing}
          //     onRefresh={props.onRefresh}
          //   /> : <View />
          // }
        >
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export const Screen = (props: ScreenProps) => {
  if (props.withoutScroll) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
