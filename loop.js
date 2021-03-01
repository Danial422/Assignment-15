// Function # 35 - Round the number 
function roundNumber() {
    var number = document.getElementById('roundValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please Enter a number</strong>';
    if (number=="") {
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            numberArray.push(tempNumber);
        }
        if (numberArray.length > 1) {
            tempNumber = numberArray[1];
            tempArray = [];
            for (x=0; x<tempNumber.length; x++) {
                tempArray.push(tempNumber[x]);
            }
            if (tempArray[0] > 5) {
                numberArray[0] = parseInt(numberArray[0]) + 1;
            } else if (tempArray[0] == 4 && tempArray.length > 1) {
                for (a=tempArray.length-1; a>0; a--) {
                    if (tempArray[a] >= 5) {
                        tempArray[a-1] = parseInt(tempArray[a-1]) + 1;
                    }
                }
            }
            if (tempArray[0] == 5) {
                numberArray[0] = parseInt(numberArray[0]) + 1;
            }
        }
        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-success text-center';
    }
}


// Function # 36 - Ceil the number
function ceilNumber() {
    var number = document.getElementById('ceilValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please Enter a number</strong>';
    if (number=="") {
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            if (tempNumber != '') {
                numberArray.push(tempNumber);
            }
        }
        if (numberArray.length > 1) {
            numberArray[0] = parseInt(numberArray[0]) + 1;
        }
        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-success text-center';
    }
}


// Function # 37 - Floor the number
function floorNumber() {
    var number = document.getElementById('floorValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please enter a number</strong>';
    if (number=="") {
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            if (tempNumber != '') {
                numberArray.push(tempNumber);
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-success text-center';
    }
}


// Function # 38 - Print all natural numbers from 1 to n
function naturalNumber() {
    var number = document.getElementById('naturalValue').value;
    var naturalNumbers = '';
    var newSegment = '<strong>Please enter a positive Integer</strong>';
    if (number=="" || number=="0" || number.match(/[.-]/g)) {
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-danger text-center';
    } else {
        for (var i=1; i<=number; i++) {
            if (i == number) {
                naturalNumbers = naturalNumbers + i;
            } else {
                naturalNumbers = naturalNumbers + i + ' ';
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Natural Numbers: <strong>"' + 
        naturalNumbers + '"</strong>';
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-success text-center';
    }
}


// Function # 39 - Print all natural numbers reverse from n to 1
function reverseNaturalNumber() {
    var number = document.getElementById('reverseNaturalValue').value;
    var naturalNumbers = '';
    var newSegment = '<strong>Please enter a positive Integer</strong>';
    if (number=="" || number=="0" || number.match(/[.-]/g)) {
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-danger text-center';
    } else {
        for (var i=number; i>0; i--) {
            if (i == 1) {
                naturalNumbers = naturalNumbers + i;
            } else {
                naturalNumbers = naturalNumbers + i + ' ';
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Natural Numbers: <strong>"' + 
        naturalNumbers + '"</strong>';
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-success text-center';
    }
}


// Function # 40 - Print all alphabets from a-z
function printAlphabet () {
    var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alphabet = '';

    for (var i=0; i<alphabetArray.length; i++) {
        if (alphabetArray[i] == 'z') {
            alphabet = alphabet + alphabetArray[i];
        } else {
            alphabet = alphabet + alphabetArray[i] + ' ';
        }
    }

    newSegment = 'Alphabets (a-z): <strong>"' + alphabet + '"</strong>';
    document.getElementById('alert40').innerHTML = newSegment;
    document.getElementById('alert40').className = 'alert alert-success text-center';
}


// Function # 41 - Print all even numbers between 1 to 100
function evenNumbers() {
    var evenValue = 100;
    var evenNumbers = '';

    for (var i=1; i<=evenValue; i++) {
        if (i%2 == 0) {
            if (i == 100) {
                evenNumbers = evenNumbers + i;
            } else {
                evenNumbers = evenNumbers + i + ' ';
            }
        } 
    }

    newSegment = 'Even Numbers (1-100): <strong>"' + evenNumbers + '"</strong>';
    document.getElementById('alert41').innerHTML = newSegment;
    document.getElementById('alert41').className = 'alert alert-success text-center';
}


// Function # 42 - Print all odd numbers between 1 to 100
function oddNumbers() {
    var oddValue = 100;
    var oddNumbers = '';

    for (var i=1; i<=oddValue; i++) {
        if (i%2 != 0) {
            if (i == 99) {
                oddNumbers = oddNumbers + i;
            } else {
                oddNumbers = oddNumbers + i + ' ';
            }
        } 
    }

    newSegment = 'Odd Numbers (1-100): <strong>"' + oddNumbers + '"</strong>';
    document.getElementById('alert42').innerHTML = newSegment;
    document.getElementById('alert42').className = 'alert alert-success text-center';
}