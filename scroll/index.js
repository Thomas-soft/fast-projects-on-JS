// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const   nav = document.getElementById("navbar");
let     oldY = 0;

window.addEventListener("scroll", (e) =>
{
    const   y = window.scrollY;
    if (window.scrollY <= 50)
        nav.style.top = "0px";
    else if (y < oldY)
        nav.style.top = "0px";
    else
        nav.style.top = "-60px";
    oldY = y;
});
