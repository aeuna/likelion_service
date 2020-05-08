let all = document.querySelectorAll("#img_btn")
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
 
var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("modal_btn_menu");
var span1 = document.getElementsByClassName("close")[1];  
                                      
btn1.onclick = function() {
    modal1.style.display = "block"; 
}
span1.onclick = function() {
    modal1.style.display = "none";
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("modal_btn");
var span = document.getElementsByClassName("close")[0];                                          

btn.onclick = function() {
    modal.style.display = "block";
    flag = 0;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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


var effect_box = document.getElementsByClassName('text-effect');

function effect(object, speed) {

    var object_len = object.item(0).innerText.length;
    var object_text = object.item(0).innerText;

    object.item(0).innerHTML = '';

    for (var i = 0; i <= object_len; i++) {
        n_tag = document.createElement("p");
        object.item(0).append(n_tag);
        n_tag.append(object_text.charAt(i))

        if (i >= object_len) {
            var anima = true;
        }
    }
    if (anima === true) {
        var turn = 0;
        var opacity_txt = setInterval(function () {
            document.querySelectorAll('p').item(turn).style.opacity = '1';
            turn++;

            if (object_len === turn) {
                clearInterval(opacity_txt);
            }
        }, speed);
    }
}

effect(effect_box, 100);
