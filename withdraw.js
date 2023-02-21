const buttonWithdrawl = document.getElementById("buttonWithdrawl")
const pwInput = document.getElementById("pw")

function checkOrientation() {
    if ((window.innerWidth > window.innerHeight) && window.innerWidth < 900) {
        alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
}
window.addEventListener("orientationchange", function () {
    checkOrientation();
});
checkOrientation();

document.addEventListener("scroll", function (event) {
    event.preventDefault();
}, { passive: false });

function addNumberToPIN(number) {

    if (number != 'DEL' && number != 'COR') { pwInput.value += String(number) }
    else if (number == "DEL") {
        pwInput.value = "";
    } else if (number == "COR") {
        pwInput.value = pwInput.value.substr(0, pwInput.value.length - 1);
    }

}

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


setInterval(() => {

    let balance = localStorage.getItem("balance")
    document.getElementById("Balance").innerHTML = balance / 100 + " Euro"

}, 500);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        WithdrawMoney()
    }
});


function WithdrawMoney() {
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
