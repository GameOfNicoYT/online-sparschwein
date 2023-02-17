const PWInput = document.getElementById("inputPW");
const PWButton = document.getElementById("buttonPWSend");
const buttonWithdrawl = document.getElementById("buttonWithdrawl")
const pwInput = document.getElementById("pw")

function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      alert("Bitte drehen Sie Ihr Gerät in den Portrait-Modus");
    }
  }
  window.addEventListener("orientationchange", function() {
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

function addNumberToPIN(number) {

    if (number != 'DEL' && number != 'COR') { pwInput.value += String(number) }
    else if (number == "DEL") {
        pwInput.value = "";
    } else if (number == "COR") {
        pwInput.value = pwInput.value.substr(0, pwInput.value.length - 1);
    }

}

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

function addBalance(amount) {
    let balance = localStorage.getItem("balance")
    let tempBalance = parseInt(balance) + amount
    localStorage.setItem("balance", tempBalance)

}
