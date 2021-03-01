//question 1
   function calculateNum() {
    var userVal1 = document.getElementById("N1").value;
    var userVal2 =document.getElementById("N2").value;
    if (userVal1 < userVal2) {
        document.getElementById("Ans1").innerHTML =`${userVal2} is greater than  ${userVal1}` ;
    }else{
        document.getElementById("Ans1").innerHTML = `${userVal1} is greater than ${userVal2}` ;
    }if (userVal1 == userVal2) {
        document.getElementById("Ans1").innerHTML = `both are equal` ;
    
    }

}
//question 2
function calculateNum1() {
    var userVal3 = document.getElementById("N3").value;
    var userVal4 =document.getElementById("N4").value;
    var userVal5 =document.getElementById("N5").value;

    if (userVal3 == "" || userVal4 == "" || userVal5 == "") {
        alert("Please enter all three numbers");
      } else {
        let max = userVal5;
        if (userVal4 > max) {
          max = userVal4;
        }
        if (userVal3 > max) {
          max = userVal3;
        }
        document.getElementById("Ans2").innerHTML = `greater no is ${max}`;
}
};
// question no 3
function calculateNum2() {
  var val = document.getElementById("N6").value;
  if (val == "") {
    alert("Please enter numbers");
  } else {
    if ( val == 0 ) {
      document.getElementById("Ans3").innerHTML = `your value is zero` ;
    }
    if ( val < 0 ) {
      document.getElementById("Ans3").innerHTML = `${val} is negative integer` ;
    }
    if ( val > 0 ) {
      document.getElementById("Ans3").innerHTML = `${val} is positive integer` ;
    }
  }
}
// question no 4
function calculateNum3() {
  var chk = document.getElementById("N7").value;
  if (chk == "") {
    alert ("Enter number to check")
  } 
   else if (chk %5 === 0 && chk %11 === 0) {
      document.getElementById("Ans4").innerHTML = `Your number ${chk} is divisible by 5 and 11` 
      
    }
    
   else if (chk %5 === 0 ) {
      document.getElementById("Ans4").innerHTML = `Your number ${chk} is divisible by 5 nor 11` 
      
    }
   else if (chk %11 === 0 ) {
      document.getElementById("Ans4").innerHTML = `Your number ${chk} is divisible by 11 nor 5 ` 
      
    }
    else{
      document.getElementById("Ans4").innerHTML = `Your number ${chk}  is not divisible by 11 or 5 ` 

    }
}
//question 5
function calculateNum4() {
  var chk1 = document.getElementById("N8").value;
  if (chk1 == "") {
    alert ("Enter number to check")
  } 
   else if (chk1 %2 === 0 && chk1 %3 === 0) {
      document.getElementById("Ans5").innerHTML = `Your number ${chk1} is both even and odd ` 
      
    }
    
   else if (chk1 %2 === 0 ) {
      document.getElementById("Ans5").innerHTML = `Your number ${chk1} is even` 
      
    }
   else if (chk1 %3 === 0 ) {
      document.getElementById("Ans5").innerHTML = `Your number ${chk1} is odd ` 
      
    }
    else{
      document.getElementById("Ans5").innerHTML = `Your number ${chk1}  is not even nor odd` 

    }
}
//question 6 
function checkLeap() {
  var Year = document.getElementById("year").value;
  var  reminder = parseInt(Year) % 4 ;
  if (Year == "") {
    alert ("Enter any year")
  } 
  else if (reminder == 0 ) {
      document.getElementById("Ans6").innerHTML = `${Year} is a leap year`;
      }
  else{
     document.getElementById("Ans6").innerHTML = `${Year} is not a leap year`;
  }
}
// question 7
function checkAlphabet() {
  var Alpha = document.getElementById("alphabet").value;
  if (Alpha == "") {
    alert("Enter a charcter ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    if (Alpha.match(/[a-z]/i)) {
      result = `${Alpha} is alphabet`;
    }
     else {
      result = `${Alpha} is not alphabet`;
    }
    document.getElementById("Ans7").innerText = result;
    document.getElementById("alphabet").value = "";
    return result;
  }
}
//question 8
function checkVC() {
  var UsrA = document.getElementById("vc").value;
  if (UsrA == "") {
    alert("Enter a letter ");
  } else if (UsrA.match(/[a-z]/i)) {
    let result;
    if (UsrA.match(/[aeiou]/i)) {
      result = `${UsrA} is vowel`;
    } else {
      result = `${UsrA} is constant`;
    }
    document.getElementById("Ans8").innerText = result;
    document.getElementById("vc").value = "";
    return result;
  } else {
    alert("Enter a letter ");
  }
}
// question 9 
function checkChr() {
  var userC = document.getElementById("chr").value;
  if (userC == "") {
    alert("Enter a   character ");
  }
  else if (userC.match(/[a-z]/i)) {
    document.getElementById("Ans9").innerHTML = `${userC} is alphabet`
  }else if (userC.match(/[0-9]/i)) {
    document.getElementById("Ans9").innerHTML = `${userC} is digit`;
  }  else{
    document.getElementById("Ans9").innerHTML = `${userC} is a special character`;
  }  
}



 
