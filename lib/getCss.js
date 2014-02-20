
module.exports = function() {

  // XXX: need to support 3 cases here (maybe more?)
  // - styles in the head (done)
  // - external css files
  // - @import from css files
  
  var styles = [];

  // in head 
  var headStyles = document.getElementsByTagName('style');
  for (var i=0, l=headStyles.length; i<l; i++) {
    styles.push(headStyles[i].textContent);
  }
  
  return styles;
};