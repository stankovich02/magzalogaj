$(document).ready(function(){
    $('#social-media-icons a:nth-child(1)').mouseenter(function(){
      $('#social-media-icons a:nth-child(1) img').attr('src', 'assets/images/facebook-color.png');
  });
  $('#social-media-icons a:nth-child(1)').mouseleave(function(){
      $('#social-media-icons a:nth-child(1) img').attr('src', 'assets/images/facebook.png');
  });
  $('#social-media-icons a:nth-child(2)').mouseenter(function(){
      $('#social-media-icons a:nth-child(2) img').attr('src', 'assets/images/instagram-color.png');
  });
  $('#social-media-icons a:nth-child(2)').mouseleave(function(){
      $('#social-media-icons a:nth-child(2) img').attr('src', 'assets/images/instagram.png');
  });
  $('#overlay').hide();
  $('#mobilemenu #dropdownul').hide();
  $('#mobilemenu #closemenu').click(function(){
    $('#mobilemenu #dropdownul').hide();
    $('#mobilemenu').animate({
        width: 'hide'
    }, 500)
    $('#overlay').hide();
    $('body').removeClass('stop-scrolling')
    $('#hamburger').css('rotate', '0deg');
});
$('#hamburger').click(function(){
    if($('#mobilemenu').is(':hidden')){
        $('#closemenu').show(100);
        $('#hamburger').css('rotate', '-90deg');
        $('#mobilemenu').animate({
            width: 'show'
        }, 500)
        if(window.innerWidth > 500){
        $('#overlay').show();
        }
        else{
        $('#overlay').hide();
        }
        $('body').addClass('stop-scrolling')
} else {
  $('#mobilemenu #dropdownul').hide();
    $('#hamburger').css('rotate', '0deg');
    $('#mobilemenu').animate({
        width: 'hide'
    }, 500)
    $('body').removeClass('stop-scrolling')
}
});
let droplinks = document.querySelectorAll('#navmeni #dropdownul li a');
droplinks.forEach(droplink => {
droplink.addEventListener('click', function(){
  $('#navmeni #dropdownul').hide();
})
});
$(window).scroll(function(){
if($(window).scrollTop() > 200 && window.innerWidth < 1070){
  $('#mobilemenu #dropdownul').hide();
  $('#mobilemenu').animate({
    width: 'hide'
}, 500)
$('body').removeClass('stop-scrolling');
$('#overlay').hide();
    $('#hamburger').css('rotate', '0deg');

}
});
});
if(window.location.pathname == '/index.html' || window.location.pathname == '/magzalogaj/index.html' || window.location.pathname == '/magzalogaj/'){
  if(window.innerWidth > 1150){
    let whyuss = document.querySelectorAll('.why-order-us-item');
    whyuss.forEach(whyus => {
      whyus.classList.add('why-us-slide')
    });
  }
  else{
    $('.why-order-us-item:first-child').addClass('why-us-slide-left');
    $('.why-order-us-item:nth-child(2)').addClass('why-us-slide-right');
    $('.why-order-us-item:last-child').addClass('why-us-slide-left');
  }
  if(window.innerWidth < 1071){
    $('#hero').animate({
      opacity: '1'
    }, 1500);
  };
  // let popularproducts = document.querySelectorAll('.popular-product');
  // popularproducts.forEach(popularproduct => {
  //   popularproduct.addEventListener('click', function(){
  //     window.location.href = 'cenovnik.html';
  //   })
  // });
  let swiperWrapper = document.querySelector('.swiper-wrapper');
  let popularproducts = swiperWrapper.childNodes;
  popularproducts.forEach(popularproduct => {
    popularproduct.addEventListener('click', function(){
      window.location.href = 'cenovnik.html';
    })
  });
  swiperWrapper.innerHTML = '';
  let swiperProducts = [
    {
      name: 'Kiflice',
      imgpath: 'assets/images/kiflice-popular.png',
    },
    {
      name: 'Kanapei',
      imgpath: 'assets/images/kanapei-popular.png',
    },
    {
      name: 'Slani rolati',
      imgpath: 'assets/images/slani-rolati-popular.png',
    },
    {
      name: 'Mini sendviči',
      imgpath: 'assets/images/mini-sendvici-popular.png',
    },
    {
      name: 'Ruske kape',
      imgpath: 'assets/images/ruske-kape-popular.png',
    },
    {
      name: 'Mini pice',
      imgpath: 'assets/images/mini-pice-popular.png',
    }
  ];
  for(let i = 0; i < swiperProducts.length; i++){
    swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <div class="popular-product" data-product="${swiperProducts[i].name}">
      <a href="cenovnik.html">
        <div class="img-wrapper-product">
          <img src="${swiperProducts[i].imgpath}" alt="${swiperProducts[i].name}">
          </div>
      <h3>${swiperProducts[i].name}</h3>
      </a>
      </div>
    </div>`
  }
  window.onscroll = () => {
    let screenPosition = window.innerHeight;
    let sectionAboutUs = document.querySelector('#about-us');
    if(sectionAboutUs.getBoundingClientRect().top < screenPosition - 300){
      $('#about-us').css('opacity', '1');
      document.querySelector('#about-img').classList.remove('about-img-slide');
      document.querySelector('#about-us-info').classList.remove('about-info-slide');
    }
  let sectionWhyOrderUs = document.querySelector('#why-order-us');
  let sectionTestimonials = document.querySelector('.testimonial-section');
 
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 300) && window.innerWidth > 1150){
    $('#why-order-us h2').css('opacity', '1');
    let whyuss = document.querySelectorAll('.why-order-us-item');
    whyuss.forEach(whyus => {
      whyus.classList.remove('why-us-slide')
    });
  }
  let sectionPopularProducts = document.querySelector('#popular-products');
  if((sectionPopularProducts.getBoundingClientRect().top < screenPosition - 300)){
    $('#popular-products h2').animate({
      opacity: '1'
    }, 1000);
    $('#popular-products .swiper').animate({
      opacity: '1'
    }, 1200);
  }
  if((sectionTestimonials.getBoundingClientRect().top < screenPosition - 150)){
    $('#testimonials').animate({
      opacity: '1'
    }, 1000);
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 400) && window.innerWidth < 1150){
    $('#why-order-us h2').css('opacity', '1');
    $('.why-order-us-item:first-child').removeClass('why-us-slide-left');
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 700) && window.innerWidth < 1150){
    $('.why-order-us-item:nth-child(2)').removeClass('why-us-slide-right');
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 1000) && window.innerWidth < 1150){
    $('.why-order-us-item:last-child').removeClass('why-us-slide-left');
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 250) && window.innerWidth <= 400){
    $('.why-order-us-item:first-child').removeClass('why-us-slide-left');
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 550) && window.innerWidth <= 400){
    $('.why-order-us-item:nth-child(2)').removeClass('why-us-slide-right');
  }
  if((sectionWhyOrderUs.getBoundingClientRect().top < screenPosition - 850) && window.innerWidth <= 400){
    $('.why-order-us-item:last-child').removeClass('why-us-slide-left');
  }
  }
  $(document).ready(function(){
    let droplink1 = document.querySelector('#mobilemenu #drop a:nth-child(1)');
    let droplink = document.querySelector('#navmeni #drop a:nth-child(1)');
    $(droplink1).click(function(){
      $('#mobilemenu #dropdownul').slideToggle('slow');
    });
    $(droplink).click(function(){
      $('#navmeni #dropdownul').slideToggle('slow');
    });
  $('.testimonial-pic img').click(function () {
        $(this).addClass('active')   
        $(this).siblings().removeClass('active')       
        $('.testimonial .content').removeClass('active')
        $('#' + $(this).attr('data-alt')).addClass('active')
  });
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
          slidesPerView:1,
      },
      700:{
          slidesPerView:2,
      },
      1000:{
          slidesPerView:3,
      },
      1300:{
          slidesPerView:4,
      }
  },
  });
}
if(window.location.pathname == '/galerija.html' || window.location.pathname == '/magzalogaj/galerija.html'){
  $(document).ready(function(){
    var gallery = $('.gallery a').simpleLightbox({
      // default source attribute
    sourceAttr: 'href',
    
    // shows fullscreen overlay
    overlay: true,
    
    // shows loading spinner
    spinner: true,
    
    // shows navigation arrows
     nav: true,
    
    // text for navigation arrows
    navText: ['&larr;','&rarr;'],
    
    // shows image captions
    // captions: true,
    // captionDelay: 0,
    // captionSelector: 'img',
    // captionType: 'attr',
    // captionPosition: 'bottom',
    // captionClass: '',
    
    // captions attribute (title or data-title)
    captionsData: 'title',

    disableScroll: true,
    
    // shows close button
    close: true,
    
    // text for close button
    closeText: 'X',
    
    // swipe up or down to close gallery
    swipeClose: true,
    
    // show counter
    showCounter: true,
    
    // file extensions
    fileExt: 'png|jpg|jpeg|gif',
    
    // weather to slide in new photos or not, disable to fade
    animationSlide: true,
    
    // animation speed in ms
    animationSpeed: 250,
    
    // image preloading
    preloading: true,
    
    // keyboard navigation
    enableKeyboard: true,
    
    // endless looping
    loop:  true,
    
    // group images by rel attribute of link with same selector
    rel: false,
    
    // closes the lightbox when clicking outside
    docClose:  true,
    
    // how much pixel you have to swipe
    swipeTolerance: 50,
    
    // lightbox wrapper Class
    className: 'simple-lightbox',
    
    // width / height ratios
    widthRatio: 0.6,
    heightRatio: 0.8,
    
    // scales the image up to the defined ratio size
    scaleImageToRatio: false,
    
    // disable right click
    disableRightClick: false,
    
    // disable page scroll
    disableScroll: true,
    
    // scrollZoom: false,

    // show an alert if image was not found
    alertError:  true,
    
    // alert message
    alertErrorMessage: 'Image not found, next image will be loaded',
    
    // additional HTML showing inside every image
    additionalHtml: false,
    
    // enable history back closes lightbox instead of reloading the page
    history: true,
    
    // time to wait between slides
    throttleInterval: 0,
    
    // Pinch to <a href="https://www.jqueryscript.net/zoom/">Zoom</a> feature for touch devices
    // doubleTapZoom: 2,
    // maxZoom: 10,
    
    // adds class to html element if lightbox is open
    htmlClass: 'has-lightbox',
    
    // RTL mode
    rtl: false,
    
    // elements with this class are fixed and get the right padding when lightbox opens
    fixedClass: 'sl-fixed',
    
    // fade speed in ms
    fadeSpeed: 300,
    
    // whether to uniqualize images
    uniqueImages: true,
    
    // focus the lightbox on open to enable tab control
    focus: true,

  });
});

let gallerycont = document.querySelector('.gallery');
gallerycont.innerHTML = '';
for(let i=1;i<21;i++){
  gallerycont.innerHTML += `
  <a href="assets/images/gallery-pic-${i}.jpg" class="big" rel="rel1">
  <img src="assets/images/gallery-pic-${i}.jpg" alt="">
  </a>
  `
}
}
if(window.location.pathname == '/cenovnik.html' || window.location.pathname == '/magzalogaj/cenovnik.html'){
  let pricingcont = document.querySelector('.pricing-container');
  pricingcont.innerHTML = '';
  const BASEURL = "assets/data/";
  function ajaxCallBack(fileName, result){
      $.ajax({
          url: BASEURL + fileName,
          method: "get",
          dataType: "json", 
          success: result,
          error: function(xhr){
              console.log(xhr);
          }
      })
  }
  window.onload = function(){
 
  ajaxCallBack("products.json", function(products){
      printProducts(products);
  });
 
  function printProducts(products){
   
    for(let i=0; i<products.length; i++){
      pricingcont.innerHTML +=
      `<div class="pricing-single-item" data-category="${products[i].category}">
      <div class="accordion-header">
      <h3>${products[i].name}<img id="accordion-arrow" src="assets/images/right-arrow.png"/></h3> 
      </div>
      <div class="accordion-content">
      <div class="accordion-text">
      <p>Cena: ${products[i].price} din</p>
      <p>${products[i].description}</p>
      </div>
      <img class="accordion-img" src="${products[i].imgpath}">
      </div>
      </div>`;
      }
      products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
       
  let h3accordion = document.querySelectorAll('.accordion-header h3');
  const productsSort = (button) => {
    let category = button.getAttribute('data-category');
    let productsItems = document.querySelectorAll('.pricing-single-item');
    let btns = document.querySelectorAll('.pricing-categories button');
    btns.forEach(btn => {
        btn.classList.remove('activebtn');
    })
    button.classList.add('activebtn');
    
    productsItems.forEach((item) => {
         if (item.getAttribute('data-category').includes(category)) {
          item.style.display = 'flex';
         }
         else if (category == 'Sve') {
          productsItems.forEach((item) => {
              item.style.display = 'flex';
             })
         }
         else {
             if(!item.getAttribute('data-category').includes(category)) {
                 item.style.display = 'none';
             }
            }
     })
 };
 let portfolioButtons = document.querySelectorAll('.pricing-categories button');
 portfolioButtons.forEach(button => {
     button.addEventListener('click', () => {
      productsSort(button);
     })
 });
h3accordion.forEach(h3 => {
  h3.addEventListener('click', () => {
    let arrow = h3.children[0];
    arrow.classList.add('activearrow');
    let content = h3.parentElement.parentElement.children[1];
    if(content.style.display == 'none') {
      $(content).slideDown(600);
    }
    else {
      $(content).slideUp(600);
      arrow.classList.remove('activearrow');
    }
  })
});
let acccontents = document.querySelectorAll('.accordion-content');
acccontents.forEach(content => {
  content.style.display = 'none';
})
let sortselect = document.querySelector('#sort');
sortselect.addEventListener('change', () => {
  let sortvalue = sortselect.value;
  if(sortvalue == 'priceasc') {
    products.sort((a, b) => {
      return a.price - b.price;
    });
  }
  else if(sortvalue == 'pricedesc') {
    products.sort((a, b) => {
      return b.price - a.price;
    });
  }
  else if(sortvalue == 'nameasc') {
    products.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  else if(sortvalue == 'namedesc') {
    products.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  pricingcont.innerHTML = '';
  let activebtn = document.querySelector('.activebtn');
  for(let i=0; i<products.length; i++){
    pricingcont.innerHTML +=
    `<div class="pricing-single-item" data-category="${products[i].category}">
    <div class="accordion-header">
    <h3>${products[i].name}<img id="accordion-arrow" src="assets/images/right-arrow.png"/></h3> 
    </div>
    <div class="accordion-content">
    <div class="accordion-text">
    <p>Cena: ${products[i].price} din</p>
    <p>${products[i].description}</p>
    </div>
    <img class="accordion-img" src="${products[i].imgpath}">
    </div>
    </div>`;
    }
  productsSort(activebtn);
  let acccontents = document.querySelectorAll('.accordion-content');
  acccontents.forEach(content => {
    content.style.display = 'none';
  })
  let h3accordion = document.querySelectorAll('.accordion-header h3');
  h3accordion.forEach(h3 => {
    h3.addEventListener('click', () => {
      let arrow = h3.children[0];
      arrow.classList.add('activearrow');
      let content = h3.parentElement.parentElement.children[1];
      if(content.style.display == 'none') {
        $(content).slideDown(600);
      }
      else {
        $(content).slideUp(600);
        arrow.classList.remove('activearrow');
      }
    })
  });
});
  };
}
}


