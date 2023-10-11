import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {ButtonProps} from '../../Interface';

// Button component with support for loading and disabled states
export const Button = ({
  children,
  loading,
  style,
  disabled,
  onPress,
}: ButtonProps) => {
  // Function to handle button press based on loading and disabled states
  const handlePress = () => {
    // Only call the onPress function if the button is not loading and not disabled
    !loading && !disabled && onPress && onPress();
  };

  return (
    // TouchableOpacity used for the button with onPress and disabled properties
    <TouchableOpacity onPress={handlePress} disabled={disabled} style={style}>
      {loading && (
        <View style={styles.loadingContaier}>
          <ActivityIndicator />
        </View>
      )}
      {children}
    </TouchableOpacity>
  );
};

// Styles for the Button component
const styles = StyleSheet.create({
  loadingContaier: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
