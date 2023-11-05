function add_image(){
    let img = document.createElement('img');
    img.src = "/static/ai.png"
    document.getElementById('header-image').appendChild(img);
}

function request_image(){
    var query = document.getElementById("title");
    var http = new XMLHttpRequest();
    http.open("POST", "/query", true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "prompt=" + query.value; // probably use document.getElementById(...).value
    http.send(params);
    http.onload = function() {
        add_image()
    }
    setTimeout(reset, 30000); 
    setTimeout(output, 30000); 
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

function reset(){
    var head = document.getElementById("top-half");
    head.classList.toggle("transform-active");
}
function output(){
    var head = document.getElementById("top-half");
    head.classList.toggle("transform-active");
}