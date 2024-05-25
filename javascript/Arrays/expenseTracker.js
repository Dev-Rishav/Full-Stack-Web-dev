const acc=[]

const addExpenses=function(userName,UserExpenses){
    let newObj={
        name: userName,
        expenses: UserExpenses,
        income: []
    }
    acc.push(newObj);
}

const addIncome=function(userName,userIncome){
    for(let i=0;i<acc.length;i++)
        if(acc[i].name.toLowerCase()===userName.toLowerCase()){
            acc[i].income= userIncome
            console.log("Income added successfully");
        }
}

let expensesSum=0;
let incomeSum=0;
let i=0;

const getAccountSummary=function(userName){
    for(i=0;i<acc.length;i++){
        if(acc[i].name.toLowerCase()===userName.toLowerCase()){
            for(let j=0;j<acc[i].expenses.length;j++){
                expensesSum+=acc[i].expenses[j];
                incomeSum+=acc[i].income[j];
            }
            break;
        }
    }
    console.log(`${acc[i].name} has a balance of ${incomeSum-expensesSum}. ${incomeSum} in income. ${expensesSum} in expenses.`)
}

addExpenses('rishav',[12,33,43]);
console.log(acc);
addIncome('Rishav',[21,111,231]);
console.log(acc);
getAccountSummary('rishav')