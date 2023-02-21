const PWInput = document.getElementById("inputPW");
const PWButton = document.getElementById("buttonPWSend");

setInterval(() => {
    let zeit = window.localStorage.getItem("hint")
    if(zeit <= 0 || zeit === "false"){
        document.getElementById("hint").style.display = "none"
        window.localStorage.setItem("hint", "false")
    } else{
        window,localStorage.setItem("hint", parseInt(zeit)-1)
    }
}, 1000);

function checkOrientation() {
    if ((window.innerWidth > window.innerHeight) && window.innerWidth < 900) {
        alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
}
window.addEventListener("orientationchange", function () {
    checkOrientation();
});
checkOrientation();

setInterval(() => {

    let balance = localStorage.getItem("balance")
    document.getElementById("Balance").innerHTML = balance / 100 + " Euro"

}, 500);

if (localStorage.getItem("PW") != null) {
    console.log("PW IS SET")
    document.getElementById("enterFirstPW").style.display = "none"
    document.getElementById("contentMain").style.display = "flex"
    document.getElementById("navBarID").style.display = "flex"

} else{
    window.localStorage.setItem("hint", "120")
}

if (localStorage.getItem("balance") == null) {
    localStorage.setItem("balance", "0")
}

PWButton.addEventListener("click", () => {
    if (PWInput.value > 9999 || PWInput.value < 0) {
        window.alert("Passwort ist nicht Valide")
    } else {
        console.log("PW SET")
        localStorage.setItem("PW", PWInput.value)
        location.reload();
    }
})

