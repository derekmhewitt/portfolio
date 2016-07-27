(function(module) {
  var portfolioView = {};

  var repoTemplate = Handlebars.compile($('#repo_template').text());

  portfolioView.renderRepos = function() {
    $('#portfolio_repos').empty().append((portfolioModel.repoStorage).map(repoTemplate));
  };

  portfolioModel.requestRepos(portfolioView.renderRepos);

  module.portfolioView = portfolioView;
})(window);
