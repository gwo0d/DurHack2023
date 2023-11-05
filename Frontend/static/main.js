//Renders image on page
function add_image(){
    document.getElementById("top-half").classList.remove("head-shake");
    let img = document.createElement('img');
    img.src = "/static/ai.png"
    document.getElementById('header-image').appendChild(img);
    document.getElementById('script-container').style.display = "block";
    let userInput = document.getElementById('title').value;
    document.getElementById('script-title').innerHTML=userInput;
    document.getElementById('script-title').style.display = "block";
    foot();
}

//Renders script on page
function add_script(text){
    document.getElementById("top-half").classList.add("transform-active");
    lines = JSON.parse(text)["response"]
    for(i=0; i<lines.length; i++){
        let line_div = document.createElement('div');
        document.getElementById('script-container').appendChild(line_div);
        line_div.className = "lineDiv";
        let pointer = document.createElement('img');
        pointer.src = "/static/Images/finger.png"
        pointer.className = "pointer"
        let speaker = document.createElement('p');
        speaker.className = "speaker";
        line_div.appendChild(speaker);
        speaker.appendChild(pointer);
        speaker.style.fontWeight = "bold";
        speaker.innerHTML += lines[i][0];
        let dialogue = document.createElement('p');
        dialogue.innerHTML = lines[i][1];
        dialogue.className = "dialogue";
        line_div.appendChild(dialogue);
    }
}

function request_image(){
    shaking();
    var query = document.getElementById("title");
    // Stable diffusion request
    var image_http = new XMLHttpRequest();
    image_http.open("POST", "/query", true);
    image_http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var params = "prompt=" + query.value; // probably use document.getElementById(...).value
    image_http.send(params);
    image_http.onload = function() {
        add_image()
    }

    // Script Request
    var script_http = new XMLHttpRequest();
    script_http.open("POST", "/script", true);
    script_http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    script_http.send("");
    
    script_http.onload = function() {
        add_script(script_http.responseText);
    }
}

//Functionality on form submit
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

//Toggles the eating animation
function reset(){
    var head = document.getElementById("top-half");
    head.classList.toggle("transform-active");
}

//Modal functionality
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
function removeEatingAnimation(){
    document.getElementById("top-half").classList.remove("transform-active");
}

//Foot animation
function foot(){
    var foot = document.getElementById("foot");
    foot.classList.toggle("foot-animation");
    var head = document.getElementById("eating-head");
    head.classList.toggle("foot-squash");
}

//Splash Screen
var splashScreen = document.querySelector('.splash')
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    },610)
    window.scrollTo(0,0);
})