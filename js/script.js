


$(document).ready(function(){
    // dir
    var bodyDir = $('body').css('direction')
    var dirAr
    if(bodyDir == "rtl"){
      dirAr= true
    }
    else{
      dirAr = false
    }


    
    
    // loader
    $('#loading').fadeOut(500);

    new WOW().init();

    $('select').niceSelect();













    

// function showScrollTopBtn() {
//   let scroll = window.scrollY;
//   let isNavTop = scroll < 250;
//   let scrollBtn = document.querySelector('.scrollTop');
//   if ( isNavTop) {
//     scrollBtn.classList.remove('show');
    
//   } else {
//     scrollBtn.classList.add('show');
//   }
// }
// let scrollBtn = document.querySelector('.scrollTop');

// if(scrollBtn != null){
//   window.addEventListener('scroll', showScrollTopBtn);
//   scrollBtn.addEventListener("click", ()=>{
//     window.scrollTo({top:0, left:0 });
//   })
// }


    // const navToggler = document.getElementById("nav-toggler");
    // const collapse = document.querySelector(".navbar-collapse");
    // const close = document.getElementById("close");

    // close.addEventListener("click" , ()=>{
    //   collapse.classList.remove("active")
    // })

    // navToggler.addEventListener("click" , ()=>{
    //   collapse.classList.toggle("active")
    // })





    //end
});







