scrollSpeed = 20;

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

const goToMenu = () => {
    open("../menu.html", "_self");
}

const appetizers = `
<article class="aboutArticle">Child</article>
<article class="aboutArticle">Liten Hummer</article>
<article class="aboutArticle">Shredded Hummer</article>
<article class="aboutArticle">Smol Hummer</article>
<article class="aboutArticle">Kräfta</article>
<article class="aboutArticle">Upplevelsen</article>
`;

const mainCourses = `
<article class="aboutArticle">hummer</article>
<article class="aboutArticle">lobster</article>
<article class="aboutArticle">child</article>
<article class="aboutArticle">lobster fast stor</article>
<article class="aboutArticle">lobster fast stor fast mindre</article>
`;

const desserts = `
<article class="aboutArticle">Deep fried milk</article>
<article class="aboutArticle">Lobster</article>
<article class="aboutArticle">Shrimp but bigger (lobster)</article>
<article class="aboutArticle">Crab shells</article>
<article class="aboutArticle">Pinapple with shrimps inside</article>
<article class="aboutArticle">Carcass</article>
<article class="aboutArticle">Suspiscous looking eye</article>
`;

const changeMenu = (menu) => {
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