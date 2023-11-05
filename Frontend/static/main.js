function add_image(){
    let img = document.createElement('img');
    img.src = "/static/ai.png"
    document.getElementById('header-image').appendChild(img);
}
function image_animation(){
    document.getElementById("top-half").classList.remove("head-shake");
    setTimeout(reset, 1000);
    setTimeout(add_image, 2500);
}

//TODO: HAVE TO UNCOMMENT THIS STUFF, REMOVE THE `setTimeout(image_animation, 8000);` bit
function request_image(){
    var query = document.getElementById("title");
    var http = new XMLHttpRequest();
    shaking();
    // http.open("POST", "/query", true);
    // http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // var params = "prompt=" + query.value; // probably use document.getElementById(...).value
    // http.send(params);
    // http.onload = function() {
    //     image_animation()
    // }
    setTimeout(image_animation, 8000);

}

function submission(){
    var empty =  document.getElementById("empty-input");
    if(!(document.getElementById("title").value)){
        empty.style.display = "block";
        return;
    }
    else{
        empty.style.display = "none";
        //Head Animation
        var head = document.getElementById("top-half");
        head.classList.toggle("transform-active");
        //Text Animation
        var text = document.getElementById("form");
        text.classList.toggle("transformation-active");
        setTimeout(removeEatingAnimation, 3000);
        request_image()
    }
}

//Head shake while loading
function shaking(){
    var head = document.getElementById("top-half");
    head.classList.toggle("head-shake");
}
function reset(){
    var head = document.getElementById("top-half");
    head.classList.toggle("transform-active");
}

var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
function removeEatingAnimation(){
    document.getElementById("top-half").classList.remove("transform-active");
}
