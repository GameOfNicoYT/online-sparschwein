const buttonWithdrawl = document.getElementById("buttonWithdrawl")


function checkOrientation() {
    if ((window.innerWidth > window.innerHeight) && window.innerWidth < 900) {
        alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
}
window.addEventListener("orientationchange", function () {
    checkOrientation();
});
checkOrientation();

function WithdrawlMoney() {
    console.log("BUTTON CLICK")
    let pwInput = document.getElementById("pw").value
    let withdrawl = (document.getElementById("amount").value) * 100
    console.log(parseInt(pwInput))
    console.log(parseInt(localStorage.getItem("PW")))
    if (parseInt(pwInput) === parseInt(localStorage.getItem("PW"))) {
        console.log("PW CORRECT")
        if (withdrawl > parseInt(localStorage.getItem("balance"))) {
            window.alert("Du kannst nicht " + withdrawl / 100 + "€ abheben wenn du nur " + parseInt(localStorage.getItem("balance")) / 100 + "€ hast!")
            document.getElementById("pw").value = ""
            document.getElementById("amount").value = ""
        } else {
            localStorage.setItem("balance", parseInt(localStorage.getItem("balance")) - withdrawl)
            document.getElementById("pw").value = ""
            document.getElementById("amount").value = ""
        }
    } else {
        document.getElementById("pw").value = ""
        document.getElementById("amount").value = ""
        window.alert("Falscher PIN!")
    }
}
