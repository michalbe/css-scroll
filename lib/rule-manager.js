module.exports = function(rule) {

  var stringifiedRule = JSON.stringify(rule);
  
  var details = {
    scopeStart : '0%',
    scopeEnd : '100%'
  }

  if (
    stringifiedRule.indexOf('animation-name') > -1 &&
    stringifiedRule.indexOf('animation-controller') > -1
  ) {
    rule.declarations.forEach(function(declaration) {
      switch (declaration.property) {
        case 'animation-name':
          details.name = declaration.value;
          break;
        case 'animation-scope' :
          var scope = declaration.value.split(',');
          details.scopeStart = scope[0].trim();
          details.scopeEnd = scope[1].trim();
          break;
      }
    });
    
    return details;
  }
  
  return false;
}
