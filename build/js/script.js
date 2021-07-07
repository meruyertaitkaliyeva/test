  const body = document.body;
  const headerMain = document.querySelector('.header');
  const navToggleButton = headerMain.querySelector('.header__toggle');
  const navWrapper = headerMain.querySelector('.header__wrapper');
  const navInteractionList = headerMain.querySelector('.header__interaction-list');

  headerMain.classList.remove('header--nojs');

  navToggleButton.addEventListener('click', function () {
    if (headerMain.classList.contains('header--closed')) {
      headerMain.classList.remove('header--closed');
      headerMain.classList.add('header--opened');
      navWrapper.appendChild(navInteractionList);
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      headerMain.classList.remove('header--opened');
      headerMain.classList.add('header--closed');
      navWrapper.removeChild(navInteractionList);
      body.style.position = 'unset';
    }
  });