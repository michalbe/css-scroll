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
    animation[keyframe.values[0]] = extractDeclarations(keyframe.declarations)
  });
  
  return animation;
}