var pr2px = require('./percent-to-pixels');

var extractValue = function(values) {
  var value = values[0];
  
  if (value.indexOf('%') > -1) { // percentage
    value = pr2px(parseInt(value, 10));
  } else if (value.indexOf('px') > -1) { // pixels
    value = parseInt(value, 10);
  }
  // TODO: em support?
  
  return value;
}

var extractDeclarations = function(declarations) {
  var dec = '';
  declarations.forEach(function(declaration){
    dec += declaration.property + ':' + declaration.value + ';';
  });
  
  return dec;
}

module.exports = function(keyframes) {
  
  var animation = {};
  
  keyframes.forEach(function(keyframe){
    animation[extractValue(keyframe.values)] = extractDeclarations(keyframe.declarations)
  });
  
  return animation;
}