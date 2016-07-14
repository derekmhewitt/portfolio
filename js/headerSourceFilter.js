var headerSourceFilter = {};

headerSourceFilter.navListFilter = function(event) {
  $('.nav_tab').on('click', function() {
    console.log($('#articles', '#about_me'));
    $('#articles').hide(); 
    $('#about_me').hide();
    var $x = '#' + $(this).data('category');
    $('' + $x).show('slow');
  });
};

// articleView.handleMainNav = function () {
//   $('.tab').on('click', function() {
//     $('.tab-content').hide();
//     var $x = '#' + $(this).data('content');
//     $('' + $x).show('slow');
//   });
//   // $('.main-nav .tab:first').click();
// };
//
// articleView.setTeasers = function() {
//   /* Hide any elements after the first 2 (<p> Tags in case)
//   in any article body: */
//   $('.article-body *:nth-of-type(n+2)').hide();
//
//   /* TODO DONE: Add a delegated event handler to reveal the remaining
//   paragraph.  When a .read-on link is clicked, we can:
//   1. Prevent the default action of a link.
//   2. Reveal everything in that particular article now.
//   3. Hide that read-on link! */
//   // TODO DONE STRETCH GOAL!:  change the 'Read On' link to display 'Show Less'
//   $(document).on('click', '.read_on', function(event) {
//     event.preventDefault();
//     $(this).prev().find('p').nextAll().show();
//     $(this).text('Show Less \u2190');
//     $(this).removeClass('read_on');
//     $(this).addClass('show_less');
//   });
//   $(document).on('click', '.show_less', function(event) {
//     event.preventDefault();
//     $(this).prev().find('p').nextAll().hide();
//     $(this).text('Read More \u2192');
//     $(this).removeClass('show_less');
//     $(this).addClass('read_on');
//   });
// };

headerSourceFilter.navListFilter();
