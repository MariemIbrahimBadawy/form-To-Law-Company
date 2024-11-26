// Swiper Library to Slider Show
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
        delay:6000,
        disableOnInteraction: false

    },
    pagination: {
      el: '.swiper-pagination',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

  // Sigin In
  let siginIn = document.querySelector('#sign-in')
  siginIn.addEventListener('click',function(){
    this.innerHTML = '... دخول'
  })

