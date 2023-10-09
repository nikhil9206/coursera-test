var elements = document.getElementById("obj");
var button = document.getElementById("spec");
var vis_elements = [];

var chicken = document.getElementById("chicken");
var beef = document.getElementById("beef");
var salmon = document.getElementById("salmon");


button.addEventListener('click', function () {
    let a = Math.floor(Math.random() * 2) + 1;
    let b = Math.floor(Math.random() * 2) + 1;
    let c = Math.floor(Math.random() * 2) + 1;

    if (a == 1) 
        {chicken.show()}
    else
        {chicken.hide()}

    if (b == 1) 
        {beef.show()}
    else
        {beef.hide()}


    if (c == 1) 
        {salmon.show()}
    else
        {salmon.hide()}



});


var randomElement = elements[Math.floor(Math.random() * elements.length)];


randomElement.style.display = "block";
