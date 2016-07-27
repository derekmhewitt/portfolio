
(function(module) {
  var portfolioControl = {};

  portfolioControl.reveal = function() {
    $('.hiderClass').hide();
    $('#portfolio').fadeIn();
  };

  module.portfolioControl = portfolioControl;
})(window);
