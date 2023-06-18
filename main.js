const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', (e)=> {
  e.target.closest('.j-btn-test').classList.toggle('btn--toggle');
})