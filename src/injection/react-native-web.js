const ReactPrimitives = require('../ReactPrimitives');
const {
  Animated,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Touchable,
  Dimensions,
} = require('react-native-web');
const Easing = require('animated/lib/Easing');

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
});

ReactPrimitives.inject({
  Touchable: require('../modules/Touchable')(
    Animated,
    StyleSheet,
    ReactPrimitives.Platform,
    Touchable
  ),
});
