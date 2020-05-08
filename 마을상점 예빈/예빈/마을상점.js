let all = document.querySelectorAll("#img_btn")
console.log(all.length)
all[0].addEventListener('click',function(){
    window.scrollBy({left:0, top:1080, behavior:'smooth'});
})
all[1].addEventListener('click',function(){
    window.scrollBy({left:0, top:2160, behavior:'smooth'});
})
all[2].addEventListener('click',function(){
    window.scrollBy({left:0, top:3240, behavior:'smooth'});
})

var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
 }
 slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
}

