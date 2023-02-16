const PWInput = document.getElementById("inputPW");
const PWButton = document.getElementById("buttonPWSend");
const buttonWithdrawl = document.getElementById("buttonWithdrawl")

setInterval(() => {
    
    let balance = localStorage.getItem("balance")
    document.getElementById("Balance").innerHTML =  balance / 100 + " Euro"

}, 500);

if(localStorage.getItem("PW") != null){
    console.log("PW IS SET")
    document.getElementById("enterFirstPW").style.display = "none"
    document.getElementById("content").style.display = "flex"
}

if(localStorage.getItem("balance") == null){
    localStorage.setItem("balance", "0")
}

PWButton.addEventListener("click", () => {
    if (PWInput.value > 9999 || PWInput.value < 0) {
        window.alert("Passwort ist nicht Valide")
    } else {
        console.log("PW SET")
        localStorage.setItem("PW", PWInput.value)
    }
})

buttonWithdrawl.addEventListener("click", () => {
    console.log("BUTTON CLICK")
    let pwInput = document.getElementById("pw").value
    let withdrawl = (document.getElementById("amount").value)*100
    console.log(parseInt(pwInput))
    console.log(parseInt(localStorage.getItem("PW")))
    if(parseInt(pwInput) === parseInt(localStorage.getItem("PW"))){
        console.log("PW CORRECT")
        localStorage.setItem("balance", parseInt(localStorage.getItem("balance")) - withdrawl)
    }
})

function addBalance(amount){

    let balance = localStorage.getItem("balance")
    let tempBalance = parseInt(balance) + amount
    localStorage.setItem("balance", tempBalance)

}