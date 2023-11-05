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