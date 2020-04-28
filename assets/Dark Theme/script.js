// to setup the dark theme
let toggled = false;
var hTag = document.getElementById("switch-dark");
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
var app_body = document.getElementsByClassName('app-body')[0];
var app_heading = document.getElementById('app-heading');
var description = document.getElementsByClassName('description')[0];
let secnd = document.getElementById('cat-label');
let third = document.getElementsByClassName('date-margin')[0];

document.getElementById("toggle").onclick = function () {

    if (!toggled) {

        hTag.style.color = 'white';
        bodyTag.classList.add("bck-color-black");

        circle.style.marginLeft = "31px";
        app_body.classList.add('bck-color-black');
        description.style.color = 'white';
        secnd.style.color = 'white';
        third.style.color = 'white';
        hTag.innerText = "Theme(Dark)";
        app_heading.style.color = 'white';
        toggled = true;

    } else {

        hTag.style.color = 'black';
        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "0px";
        app_body.classList.remove('bck-color-black');
        secnd.style.color = 'darkslategrey';
        third.style.color = 'darkslategrey';
        description.style.color = 'darkslategrey';
        app_heading.style.color = '#444444';
        hTag.innerText = "Theme(White)";
        toggled = false;

    }

}