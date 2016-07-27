(function(module) {
  var portfolioControl = {};

  portfolioControl.reveal = function() {
    console.log('portfolio runs');
    $('.hiderClass').hide();
    $('#portfolio').show();
  };

  module.portfolioControl = portfolioControl;
})(window);
