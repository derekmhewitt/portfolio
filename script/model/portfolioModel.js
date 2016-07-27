(function(module) {
  var portfolioModel = {};

  portfolioModel.repoStorage = [];

  portfolioModel.requestRepos = function(next) {
    $.ajax({
      url: 'https://api.github.com/users/derekmhewitt/repos',
      type: 'GET',
      headers: {
        'Authorization':'token ' + token,
      },
      success: function(data, message, xhr) {
        data.forEach(function(current) {
          portfolioModel.repoStorage.push(current);
        });
        next();
      }
    });
  };

  module.portfolioModel = portfolioModel;
})(window);
