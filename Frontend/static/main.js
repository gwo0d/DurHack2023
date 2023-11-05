function add_image(){
    let img = document.createElement('img');
    img.src = "/static/ai.png"
    document.getElementById('header-image').appendChild(img);
}
function image_animation(){
    shaking();
    setTimeout(reset, 1000);
    setTimeout(add_image, 2500);
}

//TODO: HAVE TO UNCOMMENT THIS STUFF, REMOVE THE `setTimeout(image_animation, 8000);` bit
function request_image(){
    var query = document.getElementById("title");
    var http = new XMLHttpRequest();
    shaking();

    //Resets the head for next opening animation
    reset();
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