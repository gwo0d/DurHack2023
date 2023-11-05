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
        setTimeout(reset, 4000); 
        setTimeout(output, 5000); 
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