
//Giriş kısmının animation sona erdiğinde yok olmasını sağlıyor
window.addEventListener("DOMContentLoaded", function(){
    var start = document.querySelector("body .start")
    
    setTimeout(function(){
        start.classList.remove("active")
   },4900)
})


//Headerdaki nav menuye mouse tutulduğunda çıkan menünün açılmasını ve yok olmasını sağlıyor
window.addEventListener("DOMContentLoaded", function(){
    var menu = document.querySelectorAll("header .container nav .menu ul a.multi-menu")

for(var i = 0; i < menu.length; i++){
        menu[i].addEventListener("mouseenter", function(){
            this.querySelector(".menu-bottom-item").classList.add("active")
        })
        menu[i].addEventListener("mouseleave", function(){
            this.querySelector(".menu-bottom-item").classList.remove("active")
        }) 
    }
})


//Hero imagedeki menu hover olduğunda alt menü açılması için
window.addEventListener("DOMContentLoaded", function(){
    var multiMenu = document.querySelectorAll("main .hero .store-menu .hero-multi-menu")
    

    for(var i=0; i < multiMenu.length ; i++){
        multiMenu[i].addEventListener("mouseenter", function(){
           this.querySelector(".hero-menu").classList.add("active")
        })
        multiMenu[i].addEventListener("mouseleave", function(){
            this.querySelector(".hero-menu").classList.remove("active")
        })
    }
})    


//App slider kısmında küçük resimlere hover olduğunda büyük resme geçiş yapmasını sağlıyor
window.addEventListener("DOMContentLoaded", function(){
    var bigImage = document.querySelector("main .content div.main-app-slider .app-slider > img")
    var bigImgSrc = bigImage.getAttribute("src")
    var imgCont = document.querySelector("main section div.main-app-slider .app-slider .app-slider-right .right-imgs")
    var simpImg = document.querySelectorAll("main section div.main-app-slider .app-slider .app-slider-right .right-imgs img")
    
    for(var i = 0; i < simpImg.length ; i++){
        simpImg[i].addEventListener("mouseenter", function(){
            var x = this.getAttribute("src");
            bigImage.setAttribute("src", x)
        })
        imgCont.addEventListener("mouseleave", function(){
            bigImage.setAttribute("src", bigImgSrc)
        })
    }
})

