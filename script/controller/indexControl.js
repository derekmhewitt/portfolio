
(function(module) {
  var indexControl = {};

  indexControl.reveal = function() {
    console.log('index runs');
    $('.hiderClass').hide();
    $('#articles').show();
  };
  module.indexControl = indexControl;
})(window);
