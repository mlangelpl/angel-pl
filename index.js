const toogle = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-nav');

toogle.addEventListener('click', () => {
  navbar.classList.toggle('mostrar');   
})


const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});