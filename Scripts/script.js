const burguer1 = document.getElementById("burguer1");
const burguer2 = document.getElementById("burguer2");
const burguer3 = document.getElementById("burguer3");
const body = document.querySelector("body");
const aBtn = document.querySelectorAll(".sidebar-container a")
const burguer = document.getElementById("burguer");
const menu = document.querySelector("menu");
const buttonCV = document.querySelector("#curriculum")
const buttonMail = document.querySelector("#mail")
const flutterBtn = document.querySelector(".flutter");
const skills = document.querySelectorAll(".skills-container li");

var showMenu = false;
const linkDownload = "https://drive.google.com/file/d/1_GZuwUaE0FfQCjB4Xzj8_KmYe8CFI92W/view"

burguer.addEventListener("click", burguerAnimation);
buttonCV.addEventListener("click", () => {
    window.open(linkDownload, '_blank');
})
buttonMail.addEventListener("click", () => {
    window.location.href = "mailto:phelipe44@live.com";
})
flutterBtn.addEventListener("click", () => {
    window.location.href = "#home";
})
skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.querySelector("p").style.display = "block";
    })
    skill.addEventListener("mouseout", () => {
        skill.querySelector("p").style.display = "none";
    })

})

aBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        burguer1.classList.remove("burguer1");
        burguer2.classList.remove("burguer2");
        burguer3.classList.remove("burguer3");
        body.style.overflow = "auto";
        menu.classList.remove("menu-active");
        showMenu = false;
    })
})

function burguerAnimation() {
    if (showMenu === false) {
        burguer1.classList.add("burguer1");
        burguer2.classList.add("burguer2");
        burguer3.classList.add("burguer3");
        body.style.overflow = "hidden";
        menu.classList.add("menu-active");
        showMenu = true;
    } else {
        burguer1.classList.remove("burguer1");
        burguer2.classList.remove("burguer2");
        burguer3.classList.remove("burguer3");
        body.style.overflow = "auto";
        menu.classList.remove("menu-active");
        showMenu = false;
    }

}