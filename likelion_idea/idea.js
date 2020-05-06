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

var modal = document.getElementById('myModal');
var btn = document.getElementById("modal_btn");
var span = document.getElementsByClassName("close")[0];                                          

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("modal_btn_menu");
var span1 = document.getElementsByClassName("close")[1];                                          

btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

setInterval(function(){
             
    var timer = new Date();
    var h = timer.getHours();
    var m = timer.getMinutes();
    var s = timer.getSeconds();
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
},1000);
