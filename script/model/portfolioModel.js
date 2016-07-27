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

// (function(module) {
//   var reposObj = {};
//
//   reposObj.allRepos = [];
//
//   reposObj.requestRepos = function(next) {
//     /* TODO: Done! How would you like to fetch your repos? Someone say AJAX?!
//       Do not forget to call the callback! */
//     $.ajax({
//       url: 'https://api.github.com/users/codefellows-seattle-301d9/repos',
//       type: 'GET',
//       headers: {
//         'Authorization':'token ' + token,
//       },
//       success: function(data, message, xhr) {
//         data.forEach(function(current) {
//           reposObj.allRepos.push(current);
//         });
//         next();
//       }
//     });
//   };
//
//   reposObj.withTheAttribute = function(myAttr) {
//     return reposObj.allRepos.filter(function(aRepo) {
//       return aRepo[myAttr];
//     });
//   };
//
//   module.reposObj = reposObj;
// })(window);
