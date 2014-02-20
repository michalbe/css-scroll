var parse = require('css-parse');
var styles = require('./getCss');
var keyframeManager = require('./keyframe-manager');

var css = styles()[0];

var stylesheet = parse(css).stylesheet;
var rules = stylesheet.rules;

var animations = {};

rules.forEach(function(rule) {
  switch (rule.type) {
    case 'rule':
      //ruleJSON = ruleManager(rule);
      break;
    case 'keyframes' :
      animations[rule.name] = keyframeManager(rule.keyframes);
      break;
    default:
      console.log(' Rule type not supported ');
      break;
  }
});

console.log(animations);
