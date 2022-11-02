//  Övning 1
window.onload = function () {
    let btn = document.getElementById("knapp")
    btn.addEventListener("click", openPage)
    let btnclose = document.getElementById("stängknapp")
    btnclose.addEventListener("click", closePage)
    document.getElementById("backbutton").addEventListener("click", goback)
    document.getElementById("forwardbutton").addEventListener("click", goforward)
    document.getElementById("starinterval").addEventListener("click", startinterval)
    document.getElementById("stopinterval").addEventListener("click", stopPing)
    document.getElementById("getposition").addEventListener("click", getSinglePosition)
}


function openPage () {
    window.open("http://www.dn.se")
}

//  Övning 2
function closePage () {
    window.close("http://localhost:1234/")
}

// Övning 3
function goback () {
    history.back()
}

// Övning 4
function goforward () {
    history.forward()
}

// Övning 5/6
interval = 0;
function startinterval () {
    interval = setInterval (() => {
        console.log("ping")
    }, 1000);
}



setTimeout (() => {
    console.log("delayed log");
}, 2000);

// Övning 7
function stopPing () {
    clearInterval(interval)
}

// Övning 8/9
function getSinglePosition () {
    console.log(window.navigator)
    console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition)
}

function showPosition (nuvarande) {
    console.log(nuvarande)
}
