// 'use strict';

var constructedArticles = [];

function ArticleConstructor(args) {
  for(key in args) this[key] = args[key];
//   this.author = args.author;
//   this.title = args.title;
//   this.category = args.category;
//   this.authorUrl = args.authorUrl;
//   this.datePublished = args.datePublished;
//   this.body = args.body;
}

// function Article (opts) {
//   for (key in opts) this[key] = opts[key];
// };

ArticleConstructor.prototype.createArticleHtml = function() {
  // var $newArticle = $('article.template').clone();
  // $newArticle.attr('data-category', this.category);
  // $newArticle.find('h2').text(this.title);
  // $newArticle.find('address').html('<a href="' + this.authorUrl + '">' + this.author + '</a>');
  // $newArticle.find('time[pubdate]').attr('title', this.datePublished);
  // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000) + ' days ago');
  // $newArticle.find('.article_body').html(this.body);
  // $newArticle.removeClass('template');
  // return $newArticle;

  var source = $('#source_data_template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
};

// Article.prototype.toHtml = function() {
//   // TODO: Done Erica - Use handlebars to render your articles!
//   //       - Select your template from the DOM.
//   //       - Now "compile" your template with Handlebars.
//   var source = $('#blog_article_template').html();
//   var templateFunction = Handlebars.compile(source);
//
//   // DONE: If your template will use properties that aren't on the object yet, add them.
//   //   Since your template can't hold any JS logic, we need to execute the logic here.
//   //   The result is added to the object as a new property, which can then be referenced
//   //   by a key in the template. For example, you might want to display how old a post is,
//   //   or say "(draft)" if it has no publication date:
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
//
//   // TODO: Done Erica Use the function that Handlebars gave you to return your filled-in
//   //       html template for THIS article.
//   return templateFunction(this);
// };


sourceData.sort(function(a, b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});

sourceData.forEach(function(arrayPosition){
  constructedArticles.push(new ArticleConstructor(arrayPosition));
});

constructedArticles.forEach(function(argh) {
  $('#articles').append(argh.createArticleHtml());
  // if($(this).data('category') !== 'article') {
  //   $(this).hide();
  // }
});
