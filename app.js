const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelectorAll(".next-btn")
const prevBtn = document.querySelectorAll(".prev-btn")
const btn = document.querySelector(".btns")
const showHm = document.querySelector(".show")
const showClose = document.querySelector(".close")
const navBar = document.querySelector(".nav-bar")
const links = document.querySelector(".links")


showHm.addEventListener("click", function(){
    showClose.classList.add("add")
    navBar.classList.add("add-bgColor")
    links.classList.add("add")
    links.style.color ='black'
    showHm.classList.add("hide")
    
    
})
showClose.addEventListener("click", function(){
    navBar.classList.remove("add-bgColor")
    showClose.classList.remove("add")
    showHm.classList.remove("hide")
    links.classList.remove("add")
    links.style.color ='white'
})




let counter = 0


slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
})

nextBtn.forEach(function(next){
    next.addEventListener("click", function(){
        counter++
        move()
    })
})
prevBtn.forEach(function(next){
    next.addEventListener("click", function(){
        counter--
        move()
    })
})


function move(){
    if (counter === slides.length){
        counter = 0
    }
    if(counter < 0){
        counter = slides.length - 1
    }


    slides.forEach(function(move){
        move.style.transform = `translateX(-${counter * 100}%)`
    })
}