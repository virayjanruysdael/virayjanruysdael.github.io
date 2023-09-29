//sample total amount - 10,000//

//input//
const initbill = parseFloat(prompt ("what is the total bill?")) //sample amount - 10,000//
const pax = parseInt(prompt ("How Many people to split the bill?")) //sample pax - 3//
const tip = parseInt(prompt ("What percentage tip would you like to give? 10, 12, or 15?")) //sapmle tip - 10%//

//proess//
const tipamount = (tip/100) * initbill //sample percentage - 10% / .10*10000//
const finalbill = initbill+tipamount //10000 + 1000 = 11000//

console.log(initbill)
console.log(pax)
console.log(tipamount)
console.log(tipamount)
console.log(finalbill)

//output//
document.getElementById("bill").innerHTML = `PhP ${initbill}`
document.getElementById("split").innerHTML = `${pax} Person`
document.getElementById("tip").innerHTML = `${tip}%`
document.getElementById("totalBill").innerHTML = `PhP ${Math.round(finalbill/pax)}`
