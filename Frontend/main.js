function submission(){
    let title = document.getElementById('title').value;
    console.log('Submitted!' + title);
    var element = document.getElementById("top-half");
    element.classList.toggle("transform-active");
    var text = document.getElementById("form");
    text.classList.toggle("transformation-active");
}
