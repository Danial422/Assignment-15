// Function # 25 - Read and print elements of an array
function printArray() {
    var string = document.getElementById('readArray').value;
    var array = [];
    var word = ''
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        newSegment = 'Entered String: <strong>"' + string + '"</strong><br> Array: <strong>[' + array + 
        ']</strong>';
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-success text-center';
    }
    
}


// Function # 26 - Print all negative elements of an array
function printNegativeArray() {
    var string = document.getElementById('negArray').value;
    var array = [];
    var word = '';
    var negativeArray = [];
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (array[i] < 0) {
                negativeArray.push(array[i]);
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Negative Array: <strong>[' + negativeArray + 
        ']</strong>';
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-success text-center';
    }
}


// Function # 27 - Find Sum of all array elements
function sumArray() {
    var string = document.getElementById('sumElements').value;
    var array = [];
    var word = '';
    var sum = 0;
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (array[i].match(/[0-9]/g)) {
                sum = sum + parseFloat(array[i]);
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Sum of array is <strong>"' + sum + 
        '"</strong>';
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-success text-center';
    }
}


// Function # 28 - Find maximum and minimum element in an array
function maxArray() {
    var string = document.getElementById('maxElement').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var max = min = array[0];
        for (var x=0; x<array.length; x++) {
            if (max < array[x]) {
                max = parseFloat(array[x]);
            }
            if (min > array[x]) {
                min = parseFloat(array[x]);
            }
        }
        console.log(array.length)
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Max Value: <strong>"' + max + 
        '"</strong><br> Min Value: <strong>"' + min + '"</strong>';
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-success text-center';
    }
}


// Function # 29 - Find second largest element in an array
function secondLargest() {
    var string = document.getElementById('secLargestElement').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var tempElement;
        for (var x=0; x<array.length; x++) {
            for (var y=0; y<array.length; y++) {
                if (parseFloat(array[x]) > parseFloat(array[y])) {
                    tempElement = array[x];
                    array[x] = array[y];
                    array.splice(y, 1, tempElement);
                }
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Second Largest Value: <strong>"' + array[1] + 
        '"</strong>';
        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-success text-center';
    }
}


// Function # 30 - Find total number of odd and even numbers
function totalOddAndEven() {
    var string = document.getElementById('oddAndEven').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var odd = 0;
        var even = 0;
        for (var x=0; x<array.length; x++) {
            if (parseFloat(array[x])%2 == 0) {
                even = even + 1;
            }
            else {
                odd = odd + 1;
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Number of Odd Elements: <strong>"' + odd + 
        '"</strong><br> Number of Even Elements: <strong>"' + even + '"</strong>';
        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-success text-center';
    }
}


// Function # 31 - Find total number of negative elements in array
function totalNegativeElements() {
    var string = document.getElementById('negElements').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var negativeElements = 0;
        for (var x=0; x<array.length; x++) {
            if (parseFloat(array[x]) < 0) {
                negativeElements = negativeElements + 1;
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Number of Negative Elements: <strong>"' + 
        negativeElements + '"</strong>';
        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-success text-center';
    }
}


// Function # 32 - Copy all elements of an array to another array
function copyArrayElements() {
    var string1 = document.getElementById('copyElements1').value;
    var string2 = document.getElementById('copyElements2').value;
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var word = '';
    var newSegment = '<strong>Please Enter the both arrays separated by comma(,)!</strong>';
    if (string1=="" || string2=="") {
        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-danger text-center';
    }
    else {
        // Array 01
        for (var i=0; i<string1.length; i++) {
            if (string1.slice(i, i+1) != ' ' && string1.slice(i, i+1) != ','){
                word = word + string1.slice(i, i+1);
            }
            else if (word != ''){
                array1.push(word);
                word = '';
            }
        }
        if (word != '') {
            array1.push(word);
            word = '';
        }

        // Array 02
        for (var i=0; i<string2.length; i++) {
            if (string2.slice(i, i+1) != ' ' && string2.slice(i, i+1) != ','){
                word = word + string2.slice(i, i+1);
            }
            else if (word != ''){
                array2.push(word);
                word = '';
            }
        }
        if (word != '') {
            array2.push(word);
        }

        for (var x=0; x<array1.length; x++) {
            array3.push(array1[x]);
        }
        for (var y=0; y<array2.length; y++) {
            array3.push(array2[y]);
        }

        newSegment = 'Array 1: <strong>[' + array1 + ']</strong><br> Array 2: <strong>[' + array2 + 
        ']</strong><br> Modified Array 2: <strong>[' + array3 + ']</strong>';
        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-success text-center';
    }
}


// Function # 33 - Insert an element in an array
function insertElementInArray() {
    var string = document.getElementById('insertArray').value;
    var element = document.getElementById('insertElement').value;
    var array = [];
    var array2 = [];
    var word = '';
    var newSegment = '<strong>Please Enter both numeric array separated by comma(,) and a single element to insert!</strong>';
    if (string=="" || element=="" || element.match(' ')) {
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }

        array2 = array.slice(0);
        array2.push(element);

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Element: <strong>[' + element + 
        ']</strong><br> Modified Array: <strong>[' + array2 + ']</strong>';
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-success text-center';
    }
}


// Function # 34 - Delete an element from array at specified position
function deleteElement() {
    var string = document.getElementById('deleteArray').value;
    var position = document.getElementById('deletePosition').value;
    var array = [];
    var array2 = [];
    var word = '';
    var newSegment = '<strong>Please Enter both array separated by comma(,) and position of element!</strong>';
    if (string=="" || position=="") {
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }

        array2 = array.slice(0);
        array2.splice(position, 1);

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Position: <strong>[' + position + 
        ']</strong><br> Modified Array: <strong>[' + array2 + ']</strong>';
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-success text-center';
    }
}


