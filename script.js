// script.js
function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Code to be executed after the DOM has fully loaded
    var textWrapper = document.querySelector('.animated-text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.animated-text .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.animated-text',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
});
