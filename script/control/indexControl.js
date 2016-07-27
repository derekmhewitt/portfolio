
(function(module) {
  var indexControl = {};

  indexControl.reveal = function() {
    $('.hiderClass').hide();
    $('#articles').fadeIn();
  };
  module.indexControl = indexControl;
})(window);
