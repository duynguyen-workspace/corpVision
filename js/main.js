window.onscroll = function() {appearBtn()};

var backTop = document.getElementById("backToTop");

function appearBtn() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backTop.classList.add("backToTopBtn");
    } else {
        backTop.classList.remove("backToTopBtn");
    }
}

// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({scrollTop:0}, '300');
// });