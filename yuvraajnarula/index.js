const connectBtn = document.querySelector('.connect');
const arrow = document.querySelector('.arrow');
const socialMediaList = document.querySelector('.social-media-list');
connectBtn.addEventListener('click', () => {
  if(!socialMediaList.classList.contains('active')){
    socialMediaList.classList.add('active');
    arrow.style.transform = 'rotate(180deg)';
  }else{
    socialMediaList.classList.remove('active');
    arrow.style.transform = 'rotate(0deg)';
  }
})