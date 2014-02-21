module.exports = function(value, scopeStart, scopeEnd) {
  var maxHeight = document.documentElement.scrollHeight;

  value = parseInt(value, 10);

  if (scopeStart.indexOf('%') > -1) { // percentage
    scopeStart = maxHeight * (parseInt(scopeStart, 10)/100);
  } else {
    scopeStart = parseInt(scopeStart, 10);
  }

  if (scopeEnd.indexOf('%') > -1) { // percentage
    scopeEnd = maxHeight * (parseInt(scopeEnd, 10)/100);
  } else {
    scopeEnd = parseInt(scopeEnd, 10);
  }

  var fullScope = scopeEnd - scopeStart;
  
  return (fullScope * (value/100)) + scopeStart;
};
