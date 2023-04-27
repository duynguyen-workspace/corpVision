// When the user scrolls the page, execute 2 functions
window.onscroll = function() {
    changeHeader(); // Change header
    appearBackToTop(); // Appear back to top button
};

// Get the header and back to top
var header = document.getElementById("corpHeader");
var backTop = document.getElementById("backToTop");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function changeHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("headerScroll");
        backTop.classList.add("backToTopBtn");
    } else {
        header.classList.remove("headerScroll");
        backTop.classList.remove("backToTopBtn");
    }
}

// Appear back to top button when scrolling
function appearBackToTop() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backTop.classList.add("backToTopBtn");
    } else {
        backTop.classList.remove("backToTopBtn");
    }
}

// Scroll up to the beginning if click on the scroll up button
function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};