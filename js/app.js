'use strict';

var constructedArticles = [];

function ArticleConstructor(args) {
  this.author = args.author;
  this.title = args.author;
  this.category = args.category;
  this.authorUrl = args.authorUrl;
  this.datePublished = args.datePublished;
  this.body = args.body;
}

// Article.prototype.toHtml = function() {
//   var $newArticle = $('article.template').clone();
//   $newArticle.attr('data-category', this.category);
//   $newArticle.find('h1').text(this.title);
//   $newArticle.find('address').html('<a href="' + this.authorUrl + '"">' + this.author + '</a>');
//   $newArticle.find('.article-body').html(this.body);
//   $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
//   $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//   $newArticle.removeClass('template');
//   return $newArticle;
// };



sourceData.sort(function(a, b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

sourceData.forEach(function(arrayPosition){
  constructedArticles.push(new ArticleConstructor(arrayPosition));
});

constructedArticles.forEach(function(argh) {
  $('#articles').append(argh.createArticleHtml());
});
