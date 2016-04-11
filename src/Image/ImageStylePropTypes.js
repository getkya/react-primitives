const { PropTypes } = require('react');
const ColorPropType = require('../StyleSheet/ColorPropType');
const LayoutPropTypes = require('../StyleSheet/LayoutPropTypes');
const TransformPropType = require('../StyleSheet/TransformPropType');
const ViewStylePropTypes = require('../View/ViewStylePropTypes');

const ImageResizeMode = require('./ImageResizeMode');

const { number, oneOf, string } = PropTypes;
const hiddenOrVisible = oneOf(['hidden', 'visible']);

module.exports = {
  //...LayoutPropTypes,
  //...TransformPropTypes,
  backfaceVisibility: hiddenOrVisible,
  backgroundColor: ColorPropType,
  resizeMode: oneOf(Object.keys(ImageResizeMode)),
  /* @platform web */
  boxShadow: string,
  opacity: number,
  overflow: hiddenOrVisible,
  /* @platform web */
  visibility: hiddenOrVisible,
};
