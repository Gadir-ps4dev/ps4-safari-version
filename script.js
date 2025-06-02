const agent = navigator.userAgent;
const btn = document.getElementById("brn");
const output = document.getElementById("output");

function out() {
    setTimeout(() => {
        let p = document.createElement("p");
        p.textContent = "UserAgent: " + agent;
        output.appendChild(p);
    }, 1000);
}

btn.addEventListener("click", out);
