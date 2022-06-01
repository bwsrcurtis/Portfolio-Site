function light_dark() {
    let r = document.querySelector(":root");
    let moon = document.querySelector("#moon");
    let sun = document.querySelector("#sun");
    let light = localStorage.getItem("light");
    if (light === "true") {
        r.style.setProperty("--white", "black");
        r.style.setProperty("--black", "white");
        r.style.setProperty("--background", "black");
        r.style.setProperty("--body-text", "white");
        r.style.setProperty("--gray", "#171717");
        r.style.setProperty("--light-blue", "#aa775c");
        r.style.setProperty("--blue", "#ebac8b");
        r.style.setProperty("--navy", "#ffccb1");
        sun.style.setProperty("display", "inline");
        moon.style.setProperty("display", "none");
        localStorage.setItem("light", "false");
    } else if (light === "false") {
        r.style.setProperty("--white", "white");
        r.style.setProperty("--black", "black");
        r.style.setProperty("--background", "#fbfaf8");
        r.style.setProperty("--body-text", "black");
        r.style.setProperty("--gray", "#E8E8E8");
        r.style.setProperty("--light-blue", "#5588A3");
        r.style.setProperty("--blue", "#145374");
        r.style.setProperty("--navy", "#00334E");
        moon.style.setProperty("display", "inline");
        sun.style.setProperty("display", "none");
        localStorage.setItem("light", "true");
    }
}

if (localStorage.getItem("light") === null) {
    localStorage.setItem("light", "true");
}

let r = document.querySelector(":root");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let light = localStorage.getItem("light");
if (light === "false") {
    r.style.setProperty("--white", "black");
    r.style.setProperty("--black", "white");
    r.style.setProperty("--background", "black");
    r.style.setProperty("--body-text", "white");
    r.style.setProperty("--gray", "#171717");
    r.style.setProperty("--light-blue", "#aa775c");
    r.style.setProperty("--blue", "#ebac8b");
    r.style.setProperty("--navy", "#ffccb1");
    sun.style.setProperty("display", "inline");
    moon.style.setProperty("display", "none");
}
