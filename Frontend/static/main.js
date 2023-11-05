function add_image(){
    let img = document.createElement('img');
    img.src = "/static/ai.png"
    document.getElementById('header-image').appendChild(img);
    img.scrollIntoView({
        behavior: 'smooth'
    });
}

function add_script(text){
    lines = JSON.parse(text)["response"]
    for(i=0; i<lines.length; i++){
        let line_div = document.createElement('div');
        document.getElementById('script-container').appendChild(line_div);
        line_div.className = "lineDiv"
        let speaker = document.createElement('p')
        speaker.innerHTML = lines[i][0]
        line_div.appendChild(speaker)
        let dialogue = document.createElement('p')
        dialogue.innerHTML = lines[i][1]
        line_div.appendChild(dialogue)
    }
}
function image_animation(){
    document.getElementById("top-half").classList.remove("head-shake");
    setTimeout(reset, 1000);
    setTimeout(add_image, 2500);
}

//TODO: HAVE TO UNCOMMENT THIS STUFF, REMOVE THE `setTimeout(image_animation, 8000);` bit
function request_image(){
    var query = document.getElementById("title");
    // Stable diffusion request
    var image_http = new XMLHttpRequest();
    image_http.open("POST", "/query", true);
    image_http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "prompt=" + query.value; // probably use document.getElementById(...).value
    image_http.send(params);

    // Script Request
    var script_http = new XMLHttpRequest();
    script_http.open("POST", "/script", true);
    script_http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    script_http.send("");
    
    script_http.onload = function() {
        add_script(script_http.responseText)
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
