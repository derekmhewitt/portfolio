var indexPageUtil = {};

//.nav_list and add class hidden to it if window size is less than first media query

$(window).on('resize', function() {
  if($(this).width() < 650) {
    $('.nav_list').addClass('hidden');
  }
});

$('.hamburger_menu').on('click', function() {
  // hamburger-menu will change icon to x when open
  $('.nav_list').toggleClass('hidden');
});

indexPageUtil.navListFilter = function(event) {
  $('.nav_tab').on('click', function() {
    $('#articles').hide();
    $('#about_me').hide();
    var $x = '#' + $(this).data('category');
    $('' + $x).show('slow');
  });
};

indexPageUtil.setupTeasers = function() {
  $('.article_body *:nth-of-type(n+2)').hide();
  $(document).on('click', '.read_on', function(event) {
    event.preventDefault();
    $(this).prev().find('p').nextAll().show();
    $(this).text('Show Less \u2190');
    $(this).removeClass('read_on');
    $(this).addClass('show_less');
  });
  $(document).on('click', '.show_less', function(event) {
    event.preventDefault();
    $(this).prev().find('p').nextAll().hide();
    $(this).text('Read On \u2192');
    $(this).removeClass('show_less');
    $(this).addClass('read_on');
  });
};

ArticleConstructor.fetchData();
