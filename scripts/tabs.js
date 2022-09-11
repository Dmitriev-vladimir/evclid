window.addEventListener('DOMContentLoaded', () => {
  function changeTab(element) {
    const path = element.dataset.path;
    document.querySelectorAll('.working__step').forEach(function (btn) {
      btn.classList.remove('working__step_active');
    });
    element.classList.add('working__step_active');
    document.querySelectorAll('.tabs__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__item_active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item_active');

  }


  document.querySelectorAll('.working__step').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      changeTab(tabsBtn);
    });

    tabsBtn.addEventListener('keyup', function (e) {
      if (e.code === 'Tab') {
        changeTab(tabsBtn);
      }
    });
  });

});
