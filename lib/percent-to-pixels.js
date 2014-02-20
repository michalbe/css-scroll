module.exports = function(percent) {
  var maxHeight = window.scrollMaxY;
  return maxHeight * (percent/100);
};
