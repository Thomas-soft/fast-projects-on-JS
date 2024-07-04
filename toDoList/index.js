let valid = true;
let myData = localStorage;

window.onload = () =>
{
    for (let index = 0; index < myData.length; index++)
    {
        todoListContain.innerHTML += `<li>${myData.key(index)}</li>`;
    }

    const list = document.querySelectorAll("li");
    for (let index = 0; index < myData.length; index++)
    {
        if (myData.getItem(myData.key(index)) === "checked")
        {
            list[index].classList.add("checked");
        }
    }
};

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    
    const list = document.querySelectorAll("li");

    list.forEach((li) =>
    {
        if (todo_input.value === li.textContent)
            valid = false;
    });

    if (todo_input.value.length > 1 && valid)
    {
        todoListContain.innerHTML += `<li>${todo_input.value}</li>`;
        myData.setItem(todo_input.value, 'no-checked');
    }
    todo_input.value = "";
    valid = true;
});

todoListContain.addEventListener("click", (e) =>
{
    if (e.target.id !== "todoListContain")
    {
        if (e.target.classList.contains("checked"))
        {
            e.target.remove();
            myData.removeItem(e.target.textContent);
        }
        else
        {
            e.target.classList.add("checked");
            myData.setItem(e.target.textContent, 'checked');
        }
    }
});
