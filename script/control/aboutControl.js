
(function(module) {
  var aboutControl = {};

  aboutControl.reveal = function() {
    $('.hiderClass').hide();
    $('#about_me').fadeIn();
  };
  module.aboutControl = aboutControl;
})(window);
