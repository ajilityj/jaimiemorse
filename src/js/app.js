import '../scss/styles.scss'

(function() {

  const article = document.querySelector('article');
  const nav = document.querySelector('nav');

  // add event click listener to nav
  nav.addEventListener('click', loadTargetPage, false);

  function loadTargetPage(e) {

    // remove active class from previously active nav item
    nav.querySelector('.active').classList.remove('active');

    // remove active class from previously active article item
    article.querySelector('.active').classList.remove('active');

    if (e.target !== e.currentTarget) {
      // store name of clicked class
      const clickedClassName = '.' + e.target.innerText.toLowerCase();

      // add active class to active nav item
      nav.querySelector(clickedClassName).className += ' active';

      // add active class to active article item
      article.querySelector(clickedClassName).className += ' active';
    }
    e.stopPropagation();
  }

  // TODO: Update url w/o reloading page
  // https://stackoverflow.com/a/3354511
  //  function processAjaxData(response, urlPath){
  //      document.getElementById("content").innerHTML = response.html;
  //      document.title = response.pageTitle;
  //      window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
  //  }
  //  window.onpopstate = function(e){
  //     if(e.state){
  //         document.getElementById("content").innerHTML = e.state.html;
  //         document.title = e.state.pageTitle;
  //     }
  // };

})();