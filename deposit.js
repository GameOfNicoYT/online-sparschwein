function checkOrientation() {
    if ((window.innerWidth > window.innerHeight) && window.innerWidth < 900) {
        alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
}

setInterval(() => {

    let balance = localStorage.getItem("balance")
    document.getElementById("Balance").innerHTML = balance / 100 + " Euro"

}, 500);

if (window.localStorage.getItem("hint") === null) {
    window.localStorage.setItem("hint", "120")
}  

setInterval(() => {
    let zeit = window.localStorage.getItem("hint")
    if(zeit <= 0 || zeit === "false"){
        document.getElementById("hint").style.display = "none"
        window.localStorage.setItem("hint", "false")
    } else{
        window,localStorage.setItem("hint", parseInt(zeit)-1)
    }
}, 1000);

window.addEventListener("orientationchange", function () {
    checkOrientation();
});
checkOrientation();


function addBalance(amount) {
    let balance = localStorage.getItem("balance")
    let tempBalance = parseInt(balance) + amount
    localStorage.setItem("balance", tempBalance)

}
