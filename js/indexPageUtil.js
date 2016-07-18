var indexPageUtil = {};

$('.hamburger_menu').on('click', function() {
  // hamburger-menu change icon to x
  $('.nav_list').toggle();
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

indexPageUtil.navListFilter();
indexPageUtil.setupTeasers();
