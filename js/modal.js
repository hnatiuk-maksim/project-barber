// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//       body: document.querySelector('body'),
//       input: document.querySelector('.modal-input'),
//     };
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//       refs.body.classList.toggle('no-scroll');
//     }
//   })();

let backdrop = document.querySelector('.backdrop'); //Фон модального вікна
let modal = document.querySelector('.modal'); //Модальне вікно
let openPopupButtons = document.querySelectorAll('.open-popup'); //Кнопки для відкриття вікна
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    backdrop.classList.add('active');
    modal.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  backdrop.classList.remove('active');
  modal.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if(e.target === backdrop) {
    backdrop.classList.remove('active');
    modal.classList.remove('active');
  }
});