'use strict';

var constructedArticles = [];

function ArticleConstructor(args) {
  var key;
  for(key in args) this[key] = args[key];
}

ArticleConstructor.prototype.createArticleHtml = function() {
  var source = $('#source_data_template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
  this.publishStatus = this.datePublished ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

sourceData.sort(function(a, b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

sourceData.forEach(function(arrayPosition){
  constructedArticles.push(new ArticleConstructor(arrayPosition));
});

constructedArticles.forEach(function(argh) {
  $('#articles').append(argh.createArticleHtml());
  if($(this).data('category') !== 'article') {
    $(this).hide();
  }
});
