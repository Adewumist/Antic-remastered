
// console.log(document)
// console.log(hamburgerdiv)




var hamburgerdiv = document.querySelector(".hamburger")
var mobilelinks = document.querySelector(".mobile-links-holder")
var backdroplinks =document.querySelector(".backdrop")

function dosomething(){
    hamburgerdiv.classList.toggle("showburger")
    mobilelinks.classList.toggle("show-mobile-links-holder")
    backdroplinks.classList.toggle("show-backdrop")

}