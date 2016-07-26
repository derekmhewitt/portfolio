
(function(module) {
  var portfolioControl = {};

  portfolioControl.reveal = function() {
    $('.hiderClass').hide();
    $('#portfolio').show();
  };

  module.portfolioControl = portfolioControl;
})(window);
