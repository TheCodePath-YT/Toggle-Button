let toggleButton = document.getElementById("btn");
let body = document.querySelector("body");
// By default Theme - Light
let currentTheme = "light";

let toggleTheme = () => {
    if(currentTheme=="light"){
        currentTheme = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        btn.innerText="Light-Theme";
        btn.style.backgroundColor="white";
        btn.style.color="black";
    }else{
        currentTheme = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        btn.innerText="Dark-Theme";
        btn.style.backgroundColor="black";
        btn.style.color="white";
    }
}
toggleButton.addEventListener("click",toggleTheme);