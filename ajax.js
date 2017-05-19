var url = "http://api.icndb.com/jokes/random"; //adres do dowcipów

var button = document.getElementById("get-joke");
button.addEventListener("click", function(){
    getJoke();
});
document.addEventListener("DOMContentLoaded", function(){
    getJoke();
})
var paragraph = document.getElementById("joke");

function getJoke(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", function(){
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}