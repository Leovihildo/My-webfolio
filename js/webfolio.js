// Dark Theme
let dark_theme = document.getElementById("dark_theme");
dark_theme.addEventListener('click', ()=>{
    if (document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        if (document.body.classList.contains("theme2")){
            profile_pic.src = pics[0].pic2;
        }
        if (document.body.classList.contains("theme3")){
            profile_pic.src = pics[0].pic3;
        }
        if (document.body.classList.contains("theme1")){
            profile_pic.src = pics[0].pic1;
        }
    }
    else{
        document.body.classList.add("dark-theme");
        if (document.body.classList.contains("theme2")){
            profile_pic.src = pics[0].pic2_dark;
        }
        if (document.body.classList.contains("theme3")){
            profile_pic.src = pics[0].pic3_dark;
        }
        if (document.body.classList.contains("theme1")){
            profile_pic.src = pics[0].pic1_dark;
        }
    }
})

// Change Theme
let pics = [
    {
        pic1: "./1.png",
        pic1_dark: "./2.png",
        pic3: "./3.png",
        pic3_dark: "./4.png",
        pic2: "./5.png",
        pic2_dark: "./6.png"
    }
];
let dropdown_items = document.querySelectorAll(".dropdown-item");
let profile_pic = document.querySelector(".profile-pic");
document.querySelector(".theme2").addEventListener('click', ()=>{
    document.body.classList.remove("theme1");
    document.body.classList.remove("theme3");
    document.body.classList.add("theme2");
    if (document.body.classList.contains("dark-theme")){
        profile_pic.src = pics[0].pic2_dark;
    }
    else{
        profile_pic.src = pics[0].pic2;
    }
})
document.querySelector(".theme3").addEventListener('click', ()=>{
    document.body.classList.remove("theme1");
    document.body.classList.remove("theme2");
    document.body.classList.add("theme3");
    if (document.body.classList.contains("dark-theme")){
        profile_pic.src = pics[0].pic3_dark;
    }
    else{
        profile_pic.src = pics[0].pic3;
    }
})
document.querySelector(".theme1").addEventListener('click', ()=>{
    document.body.classList.add("theme1");
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme3");
    if (document.body.classList.contains("dark-theme")){
        profile_pic.src = pics[0].pic1_dark;
    }
    else{
        profile_pic.src = pics[0].pic1;
    }
})
for (var i=0;i<dropdown_items.length;i++){
    console.log(dropdown_items[i].innerHTML);
}
        // if (dropdown_items[i].innerHTML == "Tomatoes"){
        //     alert("tomatoes")
        //     document.body.classList.add("theme2");
    // }

var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
