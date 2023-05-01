// Get all the elements from the search box and form
var searchBtn = document.getElementById("corpSearch");
var closeBtn = document.getElementById("closeSearch");
var searchWrapper = document.getElementById("searchWrapper");
var searchBox = document.getElementById("searchBox")

// Appear the search form when user click the search button
function appearForm() {
    closeBtn.classList.add("show");
    searchWrapper.classList.add("grow");
    searchBtn.classList.add("hide");
    searchBox.classList.add("show");
}

// Close the search form when user click the close button
function closeForm() {
    closeBtn.classList.remove("show");
    searchWrapper.classList.remove("grow");
    searchBtn.classList.remove("hide");
    searchBox.classList.remove("show");
}