(function(module) {
  var portfolioModel = {};

  portfolioModel.repoStorage = [];

  portfolioModel.requestRepos = function(next) {

    $.get('/github/users/derekmhewitt/repos').done(
    function(data, message, xhr) {
      console.log(data);
    });
  };

  // portfolioModel.requestRepos = proxyGitHub(next) {
  //   $.ajax({
  //     url: '/users/derekmhewitt/repos',
  //     type: 'GET',
  //     // headers: {
  //     //   'Authorization':'token ' + process.env.GITHUB_TOKEN,
  //     // },
  //     success: function(data, message, xhr) {
  //       console.log(data);
  //       data.forEach(function(current) {
  //         portfolioModel.repoStorage.push(current);
  //       });
  //       next();
  //     }
  //   });
  // };

  module.portfolioModel = portfolioModel;
})(window);
