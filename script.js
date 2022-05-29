

function light_dark() {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    let moon = document.querySelector('#moon');
    let moon_s = window.getComputedStyle(document.getElementById("moon")).display;
    let sun = document.querySelector('#sun');
    let sun_s = window.getComputedStyle(document.getElementById("sun")).display;
    if (sun_s === 'none') {
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
    else if (moon_s === 'none') {
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
    }
}
let r = document.querySelector(':root');
let rs = getComputedStyle(r);
let moon = document.querySelector('#moon');
let moon_s = window.getComputedStyle(document.getElementById("moon")).display;
let sun = document.querySelector('#sun');
let sun_s = window.getComputedStyle(document.getElementById("sun")).display;
if (sun_s === 'inline') {
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
else if (moon_s === 'inline') {
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
}