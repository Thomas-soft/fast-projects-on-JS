let     nb = 0;
const   counter = document.querySelector("h1");

const   bubbleMaker = () =>
{
    const   bubble = document.createElement("span");
    const   n = 20;

    const   size = Math.random() * 200 + 100;
    const   posTop = Math.random() * 100 + 50;
    const   posLeft = Math.random() * 100;
    const   plusMinus = Math.random() > 0.5 ? 1 : -1;

    bubble.classList.add("circle");
    document.body.appendChild(bubble);

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.top = posTop + "%";
    bubble.style.left = posLeft + "%";
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () =>
    {
        nb++;
        counter.textContent = nb;
        bubble.remove();
        return ;
    });
    setTimeout(() =>
    {
        bubble.remove();
    }, 8000);
}


setInterval(bubbleMaker, 300);
