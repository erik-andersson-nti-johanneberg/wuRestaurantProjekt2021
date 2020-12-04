const scrollSpeed = 20;

const scrollDown = () => {
    let scroll = setInterval(() => {
        if (window.scrollY < window.innerHeight) {
            window.scroll(0, window.scrollY + scrollSpeed)
        }
        else {
            clearInterval(scroll)
        }
    }, 1);
}

const goTo = (page) => {
    open("../" + page, "_self");
}

const getRows = (str) => {
    rows = [""];
    for(let c = 0; c < str.length; c++){
        if(str[c] == "\n"){
            rows.push("");
        }
        row = rows.length-1;

        rows[row] += str[c]
    }
    return rows;
}

let appetizers = `Humrar fast små (räkor)
"Färsk" Hummer
Rom
Väldigt färsk humer
Kräfta
Upplevelsen`;

let mainCourses = `Simpel Hummer
Avancerad Hummer
Hummer fast blå
Hummer fast husdjur
Hummer fast krossad
Hummer fast manglad
Lobster
Dagens special`;

let desserts = `Djupfriterad mjölk
Gårdagens special
En till hummer
Hummerskal (ingår vid huvudrätt)
Ananas med räkor i
Slumpmässig matvara från källaren
Ögon`;

const initializeMenu = (menu) => {
    let newString = "";
    let rows = getRows(menu)
    for(let r = 0; r < rows.length; r++){
        newString += `<article class="aboutArticle"><span class="menuItem">`;
        newString += rows[r];
        newString += `</span> <span class="price">5$</span></article>`;
        newString += "\n";
    }
    return newString
}

appetizers = initializeMenu(appetizers);
mainCourses = initializeMenu(mainCourses);
desserts = initializeMenu(desserts);

let menuRevealed = false;

const changeMenu = (menu) => {
    revealMenu();
    let menuElement = document.getElementById('menu');
    if (menu == "mainCourses"){
        menuElement.innerHTML = mainCourses;
    }
    if(menu == "appetizers"){
        menuElement.innerHTML = appetizers;
    }
    if(menu == "desserts"){
        menuElement.innerHTML = desserts;
    }
}

const revealMenu = () => {
    menuRevealed = true;
    let grid = document.getElementById("menuWrapper");
    let height = 0;
    let velocity = 3;
    let heightMax = 70;
    let animation = setInterval(() => {
        grid.style.gridTemplateRows = (100 - height).toString() +"% " + height.toString() + "%";
        height += velocity;
        if(height >= heightMax){
            clearInterval(animation);
        }
        if(velocity > 0.05)
            velocity *= 0.958;
        console.log(height);
    },1);
}

window.onload = () => {
    const body = document.getElementById("body");
    body.addEventListener("mousemove", e => {
    const overlay = document.getElementById("hoverImage");
    overlay.style.top = e.pageY - 50 + "px";
    overlay.style.left = e.pageX - 50 + "px";
});
}