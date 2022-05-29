function light_dark() {
    let r = document.querySelector(':root');
    let moon = document.querySelector('#moon');
    let sun = document.querySelector('#sun');
    let light = localStorage.getItem("light");
    if (light === 'true') {
        r.style.setProperty('--white', 'black');
        r.style.setProperty('--black', 'white');
        r.style.setProperty('--background', 'black');
        r.style.setProperty('--body-text', 'white');
        r.style.setProperty('--gray', '#070c0f');
        r.style.setProperty('--light-pink', '#1b4f54');
        r.style.setProperty('--pink', '#0c6e76');
        r.style.setProperty('--green', '#c39c9f');
        sun.style.setProperty('display', 'inline');
        moon.style.setProperty('display', 'none');
        localStorage.setItem("light", 'false');
    }   else if (light === 'false') {
            r.style.setProperty('--white', 'white');
            r.style.setProperty('--black', 'black');
            r.style.setProperty('--background', '#fbfaf8');
            r.style.setProperty('--body-text', 'black');
            r.style.setProperty('--gray', '#f8f3f0');
            r.style.setProperty('--light-pink', '#e4b0ab');
            r.style.setProperty('--pink', '#f39189');
            r.style.setProperty('--green', '#3c6360');
            moon.style.setProperty('display', 'inline');
            sun.style.setProperty('display', 'none');
            localStorage.setItem("light", 'true');
    }
}

if (localStorage.getItem("light") === null) {
    localStorage.setItem("light", 'true');
}

let r = document.querySelector(':root');
let moon = document.querySelector('#moon');
let sun = document.querySelector('#sun');
let light = localStorage.getItem("light");
if (light === 'false') {
    r.style.setProperty('--white', 'black');
    r.style.setProperty('--black', 'white');
    r.style.setProperty('--background', 'black');
    r.style.setProperty('--body-text', 'white');
    r.style.setProperty('--gray', '#070c0f');
    r.style.setProperty('--light-pink', '#1b4f54');
    r.style.setProperty('--pink', '#0c6e76');
    r.style.setProperty('--green', '#c39c9f');
    sun.style.setProperty('display', 'inline');
    moon.style.setProperty('display', 'none');
}
