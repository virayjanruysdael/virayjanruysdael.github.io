//Input//
let lastname = prompt ("Enter Your Last Name")
let firstname = prompt ("Enter Your First Name")
const studentgrade = parseInt(prompt ("Enter Your Grade"))

if (studentgrade >=90 && studentgrade <=100  ) {
    console.log("Grade: A");
    document.getElementById("finalGrade").innerHTML = `A - Excellent`
}
else if (studentgrade >=80 && studentgrade <=89) {
    console.log("Grade: B");
    document.getElementById("finalGrade").innerHTML = `B - Very Good`
}
else if (studentgrade >=70 && studentgrade <=79) {
    console.log("Grade: C");
    document.getElementById("finalGrade").innerHTML = `C - Good`
}
else if (studentgrade >= 60 && studentgrade <=69) {
    console.log("Grade: D");
    document.getElementById("finalGrade").innerHTML = `D - Just Keep Going`
}
else if (studentgrade >=0) {
    console.log("Grade: F");
    document.getElementById("finalGrade").innerHTML = `F - Better Luck Next Time`
}


//OUTPUT//
document.getElementById("studentName").innerHTML = `${lastname}, ${firstname}`
document.getElementById("studentgrade").innerHTML = `${studentgrade}`
//All Documents inside conditional//


