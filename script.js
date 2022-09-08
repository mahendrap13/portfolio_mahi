
// ===========================Animation =================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 500,
  delay: 400,  
})

sr.reveal(`.`)
sr.reveal(`h1`)
sr.reveal(`.services`)
sr.reveal(`.portfolio`, {delay: 50})
sr.reveal(`.home-content`, {delay: 600})
sr.reveal(`.contact`, {delay: 300})
sr.reveal(`.`, { delay: 600})
sr.reveal(`.btn0`, {delay: 700})
sr.reveal(`img`, {delay: 600})
sr.reveal(`.backend`, {delay: 1000})







$(window).scroll(function(){
    if($(document).scrollTop()>20){
        console.log("ok")
        $('#navbar').addClass('sticky');
    }else{
        $('#navbar').removeClass('sticky');
    }
});






var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




// =========================navbar menu====================

var sideMenu = document.getElementById("sidemenu");
function openmenu() {   
    sideMenu.style.right = "0";
}
function closemenu() {   
    sideMenu.style.right = "-200px";
   
}




// ======================send message=====================

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwb_gvBiw3F5SJmTshnlU_2ddNIAERTlSXLjbbuftrmM27ozrxFHWFOb6sPleITwaTUHw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send seccessfully"
        setTimeout (function(){
            msg.innerHTML =""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// document.write("hello world!");




// ==================================loader===================================
$(window).on("load", function() { 
          $(".section-loader").fadeOut("slow");
          
          var $container = $('.portfolioContainer');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  queue: true
              }
          });
       
          $('.portfolio-nav li').click(function(){
              $('.portfolio-nav .current').removeClass('current');
              $(this).addClass('current');
       
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      queue: true
                  }
               });
               return false;
          });
        });
