let open_header_modal = document.getElementById('modal');
let close_header_modal = document.getElementById('modal_close');
let modal_header = document.getElementById('modal_bg');
open_header_modal.onclick = function () {
  modal_header.classList.add('modal_bg-display');
  modal_header.classList.remove('fadeOutRight');
};
close_header_modal.onclick = function () {
  modal_header.classList.add('fadeOutRight');
  window.setTimeout(function () {
    modal_header.classList.remove('modal_bg-display');
  }, 500);
};

let open_header_modal__mobile = document.getElementById('modal__mobile');
let close_header_modal__mobile = document.getElementById('modal_close');
let modal_header__mobile = document.getElementById('modal_bg');
open_header_modal__mobile.onclick = function () {
  modal_header__mobile.classList.add('modal_bg-display');
  modal_header__mobile.classList.remove('fadeOutRight');
};
close_header_modal__mobile.onclick = function () {
  modal_header__mobile.classList.add('fadeOutRight');
  window.setTimeout(function () {
    modal_header__mobile.classList.remove('modal_bg-display');
  }, 500);
};
