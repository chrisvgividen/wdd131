
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo

        document.body.style.background = "#2b2424";

        let content = document.getElementById("content");
        content.style.color = "white";

        document.querySelector("img").setAttribute("src", "images/dark-theme-byui-image.png");

        // Below are some failed attempts at changing the text color, had to look at dom-basics.html to help me. I worry that I might not be able to do this class/program on my own without constantly looking at past work....
        // pageContent.style.font = "#ffffff";

        // Element.style.color = "#ffffff";

    } else {
        // code for changes to colors and logo

        document.body.style.background = "#ffffff";

        let content = document.getElementById("content");
        content.style.color = "black";

        document.querySelector("img").setAttribute("src", "images/byui-logo-blue.webp");

    }
}