
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
document.getElementsByName
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //preventDefault 이벤트를 멈춰줌(예, 새로고침 등)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}


/*
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h1 = document.querySelector(".hello h1");
const html = document.querySelector("html");


const superEventHandler = {
    mouseEnter: function() {
        h1.innerText = "The mouse is here!";
        h1.style.color = colors[0];
    },
    mouseLeave: function() {
        h1.innerText = "The mouse is gone!";
        h1.style.color = colors[1];
    },
    contextMenu: function() {
        h1.innerText = "The was a right click!";
        h1.style.color = colors[2];
    },
    winResize: function() {
        h1.innerText = "You just resized!";
        h1.style.color = colors[3];
    }
}
h1.addEventListener("mouseenter", superEventHandler.mouseEnter);
h1.addEventListener("mouseleave", superEventHandler.mouseLeave);
html.addEventListener("contextmenu", superEventHandler.contextMenu);
window.addEventListener("resize", superEventHandler.winResize);
*/
