var parse = require('css-parse');
var styles = require('./getCss');

var css = styles()[0];

var output_obj = parse(css);

// Print parsed object as CSS string
console.log(JSON.stringify(output_obj, null, 2));