window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__burger');
  const searchBtn = document.querySelector('.nav-bar__search')

  burgerBtn.addEventListener('click', () => {
    function closeBurger(block, btn) {
      block.style.left = '-500px';
      btn.classList.add('visually-hidden');
      btn.tabIndex = '-1';

    }

    const mainBlock = document.querySelector('.main');
    mainBlock.inert = true;
    const navList = document.querySelector('.header__nav');
    const closeBtn = document.querySelector('.nav__burger-close');
    closeBtn.classList.remove('visually-hidden');
    closeBtn.tabIndex = '0';

    navList.style.left = '0';

    closeBtn.addEventListener('click', () => {
      closeBurger(navList, closeBtn);
    });

    closeBtn.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        closeBurger(navList, closeBtn);
      }
    });
  });

  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const searchBlock = document.querySelector('.search__block');
    const searchInput = document.querySelector('.search__input');
    const searchBlockCloseBtn = document.querySelector('.search__close-btn');
    searchInput.tabIndex = '0';
    searchBlockCloseBtn.tabIndex = '0';
    searchBlock.classList.add('search__block_active');
    searchBlockCloseBtn.addEventListener('click', () => {
      searchBlock.classList.remove('search__block_active');
      searchInput.tabIndex = '-1';
      searchBlockCloseBtn.tabIndex = '-1';
    });

    searchBlockCloseBtn.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        searchBlock.classList.remove('search__block_active');
        searchInput.tabIndex = '-1';
        searchBlockCloseBtn.tabIndex = '-1';
        }
    });


  });
})
