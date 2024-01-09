// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
    const enterValue = document.getElementById("deposit-field").value
    const depositValue = parseFloat(enterValue);
    if (isNaN(depositValue)) {
        alert("Please Enter A Number!!");
        document.getElementById("deposit-field").value = "";
        return;
    }
    const previousValue = document.getElementById("totalDeposit").innerText;
    const previousDepositValue = parseFloat(previousValue);
    const depositResult = depositValue + previousDepositValue;

    document.getElementById("totalDeposit").innerText = depositResult;
    document.getElementById("deposit-field").value = " ";

    const currentBalanceString = document.getElementById("totalBalance").innerText;
    const currentBalanceFloat = parseFloat(currentBalanceString);
    const newBalance = depositValue + currentBalanceFloat;
    document.getElementById("totalBalance").innerText = newBalance;

})

// Withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // step 1
    const withdrawText = document.getElementById("withdraw-field").value
    const withdrawFloat = parseFloat(withdrawText);
    if (isNaN(withdrawFloat)) {
        alert("Please Enter A Number!!")
        document.getElementById("withdraw-field").value = "";
        return;
    }
    const presentWithdrawString = document.getElementById("totalWithdraw").innerHTML;
    const presentWithdrawFloat = parseFloat(presentWithdrawString)


    //step 2
    const currentBalanceString = document.getElementById("totalBalance").innerText;
    const currentBalanceFloat = parseFloat(currentBalanceString);
    if (withdrawFloat > currentBalanceFloat) {
        alert("You Have Not Sufficient Balance");
        document.getElementById("withdraw-field").value = " ";
        return;

    }

    const newTotalWithdraw = presentWithdrawFloat + withdrawFloat;
    document.getElementById("totalWithdraw").innerText = newTotalWithdraw;
    document.getElementById("withdraw-field").value = " ";

    const newBalance = currentBalanceFloat - withdrawFloat;
    document.getElementById("totalBalance").innerText = newBalance;

})
