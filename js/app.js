'use strict';

var constructedArticles = [];

function ArticleConstructor(args) {
  for(var key in args) this[key] = args[key];
}

ArticleConstructor.all = [];

ArticleConstructor.prototype.createArticleHtml = function() {
  var source = $('#source_data_template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
  this.publishStatus = this.datePublished ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

ArticleConstructor.loadInData = function(data) {
  data.sort(function(a,b) {
    return (new Date(b.datePublished)) - (new Date(a.datePublished));
  }).forEach(function(element) {
    ArticleConstructor.all.push(new ArticleConstructor(element));
  });
  ArticleConstructor.all.forEach(function(argh) {
    $('#articles').append(argh.createArticleHtml());
    if($(this).data('category') !== 'article') {
      $(this).hide();
    }
  });
};

ArticleConstructor.fetchData = function() {
  $.getJSON('../data/sourceData.json', function(data) {
    ArticleConstructor.loadInData(data);
    indexPageUtil.navListFilter();
    indexPageUtil.setupTeasers();
  });
};
