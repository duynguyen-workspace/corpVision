var searchBtn = document.getElementById("corpSearch");
var closeBtn = document.getElementById("closeSearch");
var searchWrapper = document.getElementById("searchWrapper");
var searchBox = document.getElementById("searchBox")

function appearForm() {
    closeBtn.classList.add("show");
    searchWrapper.classList.add("grow");
    searchBtn.classList.add("hide");
    searchBox.classList.add("show");
}

function closeForm() {
    closeBtn.classList.remove("show");
    searchWrapper.classList.remove("grow");
    searchBtn.classList.remove("hide");
    searchBox.classList.remove("show");
}