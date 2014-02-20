var parse = require('css-parse');
var styles = require('./getCss');
var keyframeManager = require('./keyframe-manager');
var ruleManager = require('./rule-manager');
var sc2px = require('./scope-to-pixels');

var css = styles()[0];

var stylesheet = parse(css).stylesheet;
var stylesheetRules = stylesheet.rules;

var animations = {};
var rules = {};

stylesheetRules.forEach(function(rule) {
  switch (rule.type) {
    case 'rule':
      var ruleDetails = ruleManager(rule);
      // XXX: add multiple selectors support
      if (ruleDetails) {
        rules[rule.selectors[0]] = ruleDetails;
      }
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
console.log(rules);

// attaching keyframes to elements
var selectors = Object.keys(rules);
selectors.forEach(function(selector) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0, l = elements.length; i<l; i++) {
    var details = rules[selector];
    var anim = animations[details.name];
    var keyframes = Object.keys(anim);
    var scopeStart = details.scopeStart;
    var scopeEnd = details.scopeEnd;
    
    keyframes.forEach(function(frame){
      console.log(sc2px(frame, scopeStart, scopeEnd));
      elements[i].dataset[sc2px(frame, scopeStart, scopeEnd)] = anim[frame];
    });
  }
});
