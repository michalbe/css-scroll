module.exports = function(value, scopeStart, scopeEnd) {
  var maxHeight = window.scrollMaxY;

  value = parseInt(value, 10);

  if (scopeStart.indexOf('%') > -1) { // percentage
    scopeStart = maxHeight * (parseInt(scopeStart, 10)/100);
  }
  if (scopeEnd.indexOf('%') > -1) { // percentage
    scopeEnd = maxHeight * (parseInt(scopeEnd, 10)/100);
  }
  
  var fullScope = scopeEnd - scopeStart;

  return (fullScope * (value/100)) + scopeStart;
};
