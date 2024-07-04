const   choice = document.getElementById("choice");
const   form = document.getElementById("form");
const   countdownDisplay = document.getElementById("countdownDisplay");
let     interval;
let     min = 0;
let     totalSec = 0;
let     sec = 0;

const   countDown = () =>
{
    let m = "";
    let s = "";

    if (sec == 0)
    {
        min--;
        sec = 60;
    }
    sec--;
    if (min < 10)
        m = '0' + min;
    else
        m = min;
    if (sec < 10)
        s = '0' + sec;
    else
        s = sec;
    countdownDisplay.textContent = `${m}:${s}`;
    console.log(`${min}:${sec}`);
    if (min <= 0 && sec <= 0)
        clearInterval(interval);
}

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    console.log(choice.value);
    if (isNaN(choice.value))
        alert("Error\nThe field is empty");
    else
    {
        min = choice.value;
        sec = 0;
        clearInterval(interval);
        interval = setInterval(countDown, 100);
    }
});
