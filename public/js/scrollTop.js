let topIcon = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
topIcon.style.display = "block";
} else {
topIcon.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}