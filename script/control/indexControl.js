
(function(module) {
  var indexControl = {};

  indexControl.reveal = function() {
    $('.hiderClass').hide();
    $('#articles').show();
  };
  module.indexControl = indexControl;
})(window);
