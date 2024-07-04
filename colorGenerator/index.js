const   txt = document.getElementById("txt");

setInterval(() => {
    const   r = Math.floor(Math.random() * 256);
    const   g = Math.floor(Math.random() * 256);
    const   b = Math.floor(Math.random() * 256);
    const   rgb = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgb;
    txt.textContent = rgb;
}, 1000);
