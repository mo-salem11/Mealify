let toggler=document.querySelector(".header .icons .toggle");
let nav_side=document.querySelector(".header .side-nav");
let close=document.querySelector(".header .side-nav .close");

toggler.onclick=function(){
    nav_side.classList.add("open");
};

close.onclick=function(){
    nav_side.classList.remove("open");
}
/////////////////////////////////////////////////////////
let halal=document.querySelector(".header .icons .first");
let sun=document.querySelector(".header .icons .second");
////////////////////////////////////////
let header=document.querySelector(".header");
let home=document.querySelector(".home");
let chefs=document.querySelector(".chefs");
let gallery=document.querySelector(".gallery");
let contact=document.querySelector(".contact");
let footer=document.querySelector(".footer");
let heading=document.querySelector(".specail-heading");
/////////////////////////////////////////

halal.onclick=function(){
sun.style.display="inline";    
halal.style.display="none";
halal.classList.add("clicked");
heading.classList.add("night"); 
header.classList.add("night");
home.classList.add("night");
chefs.classList.add("night");
gallery.classList.add("night");
contact.classList.add("night");
footer.classList.add("night");
}
sun.onclick=function(){
    sun.style.display="none";
    halal.style.display="inline";
   header.classList.remove("night");
   home.classList.remove("night");
   chefs.classList.remove("night");
   gallery.classList.remove("night");
   heading.classList.remove("night");
   contact.classList.remove("night");
   footer.classList.remove("night");
   
}
////////////////////////////////////////////////////////////////////
const navLinks = document.querySelectorAll(".header .main-nav a");

// Add click event listeners to each link
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Remove the "active" class from all links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    this.classList.add("active");

    // Get the target section ID from the link's href attribute
    const targetSectionId = this.getAttribute("href");

    // Scroll to the target section
    document.querySelector(targetSectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
////////////////////////////////////////////////////////////////




