
(function(module) {
  var aboutControl = {};

  aboutControl.reveal = function() {
    console.log('about runs');
    $('.hiderClass').hide();
    $('#about_me').show();
  };
  module.aboutControl = aboutControl;
})(window);
