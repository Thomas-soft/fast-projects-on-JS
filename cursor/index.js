const   classes = ["c1", "c2", "c3"];
const   fragment = document.createDocumentFragment();

classes.forEach(classeName =>
{
    const   c = document.createElement("span");
    
    c.classList.add("c", classeName);
    fragment.appendChild(c);
});

document.body.appendChild(fragment);

const   cs = document.querySelectorAll(".c");

window.addEventListener("mousemove", (e) =>
{
    const   x = e.clientX;
    const   y = e.clientY;

    cs.forEach((c) =>
    {
        c.style.top = `${y}px`;
        c.style.left = `${x}px`;
    });
});
