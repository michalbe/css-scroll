var parse = require('css-parse');

// CSS input string
var css = "body { \n background-color: #fff;\n }";

var output_obj = parse(css);

// Filename parameter for source mapping
var output_obj_pos = parse(css, { filename: 'file.css' });

// Print parsed object as CSS string
console.log(JSON.stringify(output_obj, null, 2));