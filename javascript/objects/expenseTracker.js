let account={
    name: "empty",
    income: 0,
    expenses:0,
}
let createAccount=function(acc,name){
    acc.name=name
}


let addIncome=function(acc,income){
    acc.income=income
}

let addExpenses=function(acc,expenses){
    acc.expenses=expenses
}

let getAccountSummary=function(acc){
    let currBal=acc.income-acc.expenses
    console.log(`${acc.name} has an income ${acc.income} and expenses of ${acc.expenses} and his current balance is ${acc.currBal}`);
}

let resetAccount=function(acc){
    acc.income=0;
    acc.expenses=0;
    console.log("Account reset successful");
}

createAccount(account,"Rishav Chakraborty")
addIncome(account,3100)
addExpenses(account,700)
getAccountSummary(account)
resetAccount(account)
getAccountSummary(account)