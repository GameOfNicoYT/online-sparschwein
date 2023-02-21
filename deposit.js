function checkOrientation() {
    if ((window.innerWidth > window.innerHeight) && window.innerWidth < 900) {
        alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
}

setInterval(() => {

    let balance = localStorage.getItem("balance")
    document.getElementById("Balance").innerHTML = balance / 100 + " Euro"

}, 500);

window.addEventListener("orientationchange", function () {
    checkOrientation();
});
checkOrientation();


function addBalance(amount) {
    let balance = localStorage.getItem("balance")
    let tempBalance = parseInt(balance) + amount
    localStorage.setItem("balance", tempBalance)

}
