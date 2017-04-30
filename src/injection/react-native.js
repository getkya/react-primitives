const ReactPrimitives = require('../ReactPrimitives');
const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Easing,
  Dimensions,
} = require('react-native');

ReactPrimitives.inject({
  StyleSheet,
  View,
  Text,
  Image,
  Animated: {
    ...Animated,
    Easing,
  },
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version,
  },
  Dimensions,
  Touchable: require('../modules/Touchable')(Animated, StyleSheet, Platform),
});
