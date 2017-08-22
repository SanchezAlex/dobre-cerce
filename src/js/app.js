//=include lib/jquery.min.js
//=include lib/TweenMax.min.js


// LANGUAGE HIGHLIGHT

document.addEventListener('DOMContentLoaded', () => {

  let langMenu = document.querySelector('.header__lang');

  langMenu.onclick = function(e) {
    if (e.target.tagName.toLowerCase() !== 'a') return;
    [].forEach.call(langMenu.querySelectorAll('a'), item => {
      item.classList.remove('lang-active');
    });

    e.target.classList.add('lang-active');
  };

});


// HEADER SEARCH FORM


document.addEventListener('DOMContentLoaded', () => {

  let searchOpen = document.querySelector('#search__icon');
  let headerWrap = document.querySelector('#header__wrap');
  let searchForm = document.querySelector('#search__form');
  let searchClose = document.querySelector('#search__close');

  searchOpen.addEventListener('click', () => {
    headerWrap.classList.toggle('blur');
    searchForm.classList.toggle('active');
  });

  searchClose.addEventListener('click', () => {
    headerWrap.classList.toggle('blur');
    searchForm.classList.toggle('active');
  });

});


// MODAL HELP

document.addEventListener('DOMContentLoaded', () => {

  let intro = document.querySelector('#intro');
  let header = document.querySelector('#header');
  let modalHelp = document.getElementById('modal-help');
  let openHelp = document.getElementById('help__btn');
  let closeHelp = document.getElementsByClassName('close-help')[0];

  openHelp.addEventListener('click', () => {
    modalHelp.style.display = 'block';
    header.classList.toggle('blur');
    intro.classList.toggle('blur');
  });

  closeHelp.addEventListener('click', () => {
    modalHelp.style.display = 'none';
    header.classList.toggle('blur');
    intro.classList.toggle('blur');
  });

  window.onclick = event => {
    if (event.target === modalHelp) {
      modalHelp.style.display = 'none';
      header.classList.toggle('blur');
      intro.classList.toggle('blur');
    }
  };

  // MODAL FORM

  let modalForm = document.getElementById('modal-form');

  let openForm = document.getElementById('help-now');

  let closeForm = document.getElementsByClassName('close-form')[0];

  openForm.onclick = () => {
    modalForm.style.display = 'block';
    header.classList.toggle('blur');
    intro.classList.toggle('blur');
  };

  closeForm.onclick = () => {
    modalForm.style.display = 'none';
    header.classList.toggle('blur');
    intro.classList.toggle('blur');

  };

  window.onclick = event => {
    if (event.target === modalForm) {
      modalForm.style.display = 'none';
      header.classList.toggle('blur');
      intro.classList.toggle('blur');
    }
  };


  let activityBtns = document.getElementsByClassName('btn-who');

  let activitySwitch = document.getElementById('organization');

  [].forEach.call(activityBtns, (btn) => {

    btn.addEventListener('click', () => {
      btn.parentElement.querySelector('.btn-who').classList.toggle('active-form');

      if (btn.classList.contains('active-form')) {
        btn.classList.remove('active-form');
        activitySwitch.style.display = 'none';
      } else {
        btn.classList.add('active-form');
        activitySwitch.style.display = 'block';
      }

    });

  });

});


// PROJECTS NAVIGATION HIGHLIGHT
document.addEventListener('DOMContentLoaded', () => {

  let prjctMenu = document.querySelector('.projects__menu');

  prjctMenu.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() !== 'a') return;
    [].forEach.call(prjctMenu.querySelectorAll('a'), item => {
      item.classList.remove('prjct-active');
    });

    e.target.classList.add('prjct-active');

  });

});



// ACCORDION BLOCKS

document.addEventListener('DOMContentLoaded', function() {

  let acc = document.getElementsByClassName('accordion');

  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle('acc-active');
      let hide = this.nextElementSibling;

      if (hide.style.maxHeight) {
        hide.style.maxHeight = null;
      } else {
        hide.style.maxHeight = hide.scrollHeight + 'px';
      }
    };
  }

});


// BARBA CONFIG

document.addEventListener('DOMContentLoaded', function() {

  Barba.Pjax.init();
  Barba.Prefetch.init();

  let FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({
        opacity: 0
      }).promise();
    },

    fadeIn: function() {
      let _this = this;
      let $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility: 'visible',
        opacity: 0
      });

      $el.animate({
        opacity: 1
      }, 200, function() {
        _this.done();
      });
    }

  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };


});















