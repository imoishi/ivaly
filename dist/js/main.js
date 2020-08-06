
// Slick
$('.slider').slick({
  slidesToShow: 1,
  dots:true,
  arrows:false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});

// Sidebar
function openFunction(){
  console.log('paici oishi');
  document.getElementById("menu").style.width="320px";
  // document.getElementById("main-box").style.marginLeft="300px";
}
function closeFuntion(){
  document.getElementById("menu").style.width="0px";
  // document.getElementById("main-box").style.marginLeft="0px";
}

// $(document).ready(function(){
//   $('.sideberbtn').click(function(){
//     // console.log('paici oishi');
//     $('.sideberbtn').toggleClass('active')
//     // $('#logoImg').toggleClass('active')
//     // $('#logoImg').addClass('active')
//     // $('#logoImg').removeClass('active')
//   })

// })

// $('.sideberbtn').on("click",function(){
//   $('.sideberbtn').toggleClass('.close-btn');
//   $('.sideberbtn').toggleClass('.side-menu');
// });


// Jqury Tabs
$('.tab').on('click', function(evt) {
  evt.preventDefault();
  $(this).toggleClass('active');
  var sel = this.getAttribute('data-toggle-target');
  $('.tab-content').removeClass('active').filter(sel).addClass('active');
});