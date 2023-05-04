const ratingEl = document.querySelector('.rating');
const ratingScreenEl = document.querySelector('.rating-screen');
const thankyouScreenEl = document.querySelector('.thank-you-screen');

const userRateEl = document.querySelector('.user-rate');
const submitBtn = document.querySelector('.submit-btn');

let lastRatingBtn;
let userRate = 0;

const ratingBtns = document.querySelectorAll('.rating-btn');
ratingBtns.forEach(btn => btn.onclick = ratingBtnClickHandler)

function ratingBtnClickHandler(e) {
  
  const isAlreadyActive = this.classList.contains('rating-btn--active')

  if(isAlreadyActive) {
    this.classList.remove('rating-btn--active');
    userRate = 0
    lastRatingBtn = null;
    
    submitBtn.setAttribute('disabled', true);
    return;
  } 

  this.classList.add('rating-btn--active');

  if(lastRatingBtn) {
    lastRatingBtn.classList.remove('rating-btn--active');
  }

  if(submitBtn.getAttribute('disabled')) {
    submitBtn.removeAttribute('disabled');
  }

  lastRatingBtn = this;
  userRate = this.dataset.value;

  userRateEl.textContent = userRate;
}


submitBtn.addEventListener('click', (e) => {
  if(userRate == 0) {
    alert('Please, give us your feedback')
  }
  
  ratingScreenEl.classList.add('hidden');
  thankyouScreenEl.classList.remove('hidden');
})
