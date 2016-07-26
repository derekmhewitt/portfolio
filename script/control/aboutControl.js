
(function(module) {
  var aboutControl = {};

  aboutControl.reveal = function() {
    $('.hiderClass').hide();
    $('#about_me').show();
  };
  module.aboutControl = aboutControl;
})(window);
