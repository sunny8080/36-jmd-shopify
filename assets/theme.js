document.addEventListener('DOMContentLoaded', () => {
  let headerWrapper = document.querySelector('.jmd-header-wrapper');

  function updateHeaderPosition() {
    if (!headerWrapper) return;
    let ht = Math.round(headerWrapper?.getBoundingClientRect().bottom ?? 0);
    document.documentElement.style.setProperty('--main-header-bottom-position', `${ht}px`);
  }
  updateHeaderPosition();
  window.addEventListener('resize', updateHeaderPosition);


  let hamburger = document.querySelector('.jmd-hamburger');
  let megaMenuContainer = document.querySelector('.mega-menu-mobile-container');

  if (hamburger && megaMenuContainer) {
    hamburger.addEventListener('click', () => {
      megaMenuContainer.classList.toggle('menu-open');
      let isExpanded = megaMenuContainer.getAttribute('aria-expanded') == 'true';
      megaMenuContainer.setAttribute('aria-expanded', String(!isExpanded));
      
      if (megaMenuContainer.classList.contains('menu-open')){
        document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = "14px";
      }else{
        document.body.style.overflow = "auto";
        megaMenuContainer.querySelectorAll('details').forEach((ele)=>{
          ele.removeAttribute('open');
        })
        // document.body.style.paddingRight = "0";
      }
    });
  }
});