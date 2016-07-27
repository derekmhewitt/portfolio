
//set up route functions
function index() {
  indexControl.reveal();
}

function about() {
  aboutControl.reveal();
}

function portfolio() {
  portfolioControl.reveal();
}

//call page against those functions
page('*', index);
page('/', index);
page('#', index);
page('/about', about);
page('/portfolio', portfolio);
