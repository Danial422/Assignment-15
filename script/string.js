//question 1
function st() {
    var txt = document.getElementById("S1").value;
    if (txt == "") {
        alert("Enter a text  ");
      } else {
        let result;
        result = txt.length;
        document.getElementById("Ans1").innerText = result;
        document.getElementById("S1").value = "";
      }
    }
    //question 2
    function st1() {
      var string01 = document.getElementById('S2').value;
      var string02 = document.getElementById('S3').value;
      var string02Old = string02;
      var newSegment = '<strong>Please Enter both Strings!</strong>';
      if (string01=="" || string02=="") {
          document.getElementById('Ans2').innerHTML = newSegment;
          document.getElementById('Ans2').className = 'alert alert-danger text-center';
      }
      else {
          string02 = string01 + ' ' + string02;
          newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
          string02Old + '"</strong><br> New Second String: <strong>"' + string02 + '"</strong>';
          document.getElementById('Ans2').innerHTML = newSegment;
          document.getElementById('Ans2').className = 'alert alert-success text-center';
      }
  }
  // Function # 12 - Concatenate two Strings
function concatenateString() {
  var string01 = document.getElementById('conString01').value;
  var string02 = document.getElementById('conString02').value;
  var conString = 'none';
  var newSegment = '<strong>Please Enter both Strings!</strong>';
  if (string01=="" || string02=="") {
      document.getElementById('alert12').innerHTML = newSegment;
      document.getElementById('alert12').className = 'alert alert-danger text-center';
  }
  else {
      conString = string01 + ' ' + string02;
      newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
      string02 + '"</strong><br> New Concatenated String: <strong>"' + conString + '"</strong>';
      document.getElementById('alert12').innerHTML = newSegment;
      document.getElementById('alert12').className = 'alert alert-success text-center';
  }
}


// Function # 13 - Compare two Strings
function compareString() {
  var string01 = document.getElementById('comString01').value;
  var string02 = document.getElementById('comString02').value;
  var status = 'none';
  var newSegment = '<strong>Please Enter both Strings!</strong>';
  if (string01=="" || string02=="") {
      document.getElementById('alert13').innerHTML = newSegment;
      document.getElementById('alert13').className = 'alert alert-danger text-center';
  }
  else {
      if (string01.length == string02.length) {
          status = 'equal'
      }
      else {
          status = 'not equal'
      }
      newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
      string02 + '"</strong><br> First String is <strong>"' + status + '"</strong> to Second String';
      document.getElementById('alert13').innerHTML = newSegment;
      document.getElementById('alert13').className = 'alert alert-success text-center';
  }
}


// Function # 14 - Convert string to uppercase
function convertToUpperCase() {
  var string = document.getElementById('upperString').value;
  var newString = string.toUpperCase();
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert14').innerHTML = newSegment;
      document.getElementById('alert14').className = 'alert alert-danger text-center';
  }
  else {
      newSegment = 'Old String: <strong>"' + string + '"</strong><br> New String: <strong>"' + newString + '"</strong>';
      document.getElementById('alert14').innerHTML = newSegment;
      document.getElementById('alert14').className = 'alert alert-success text-center';
  }
}


// Function # 15 - Convert string to lowercase
function convertToLowerCase() {
  var string = document.getElementById('lowerString').value;
  var newString = string.toLowerCase();
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert15').innerHTML = newSegment;
      document.getElementById('alert15').className = 'alert alert-danger text-center';
  }
  else {
      newSegment = 'Old String: <strong>"' + string + '"</strong><br> New String: <strong>"' + newString + '"</strong>';
      document.getElementById('alert15').innerHTML = newSegment;
      document.getElementById('alert15').className = 'alert alert-success text-center';
  }
}


// Function # 16 - Convert string to togglecase
function convertToToggleCase() {
  var string = document.getElementById('toggleString').value;
  var oldString= string;
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert16').innerHTML = newSegment;
      document.getElementById('alert16').className = 'alert alert-danger text-center';
  }
  else {
      for(var i=0; i<string.length; i++) {
          if (string.slice(i,i+1) == string.slice(i,i+1).toLowerCase()) {
              string = string.slice(0, i) + string.slice(i, i+1).toUpperCase() + string.slice(i+1, string.length);
          }
          else {
              string = string.slice(0, i) + string.slice(i, i+1).toLowerCase() + string.slice(i+1, string.length);
          }
      }
      newSegment = 'Old String: <strong>"' + oldString + '"</strong><br> New String: <strong>"' + string + '"</strong>';
      document.getElementById('alert16').innerHTML = newSegment;
      document.getElementById('alert16').className = 'alert alert-success text-center';
  }
}


// Function # 17 -  Find total number of alphabets, digits, and special characters in a string
function countCharacterType() {
  var string = document.getElementById('countString').value;
  var alphabets = 0;
  var digits = 0;
  var special = 0;
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert17').innerHTML = newSegment;
      document.getElementById('alert17').className = 'alert alert-danger text-center';
  }
  else {
      for (var i=0; i<string.length; i++) {
          if (string.slice(i, i+1).match(/[a-z,A-Z]/g)) {
              alphabets = alphabets + 1;
          }
          else if (string.slice(i, i+1).match(/[0-9]/g)) {
              digits = digits + 1;
          }
          else {
              special = special + 1;
          }
      }
      newSegment = 'String: <strong>"' + string + '"</strong><br> Alphabets: <strong>"' + alphabets + 
      '"</strong><br> Digits: <strong>"' + digits + '"</strong><br> Special Characters: <strong>"' + 
      special + '"</strong>';
      document.getElementById('alert17').innerHTML = newSegment;
      document.getElementById('alert17').className = 'alert alert-success text-center';
  }
}


// Function # 18 - Count total number of Vowels and Consonants
function countAlphabetType() {
  var string = document.getElementById('alphabetString').value;
  var vowels = 0;
  var consonants = 0;
  var newSegment = '<strong>Please Enter a Alphabetic String!</strong>';
  if (string=="") {
      document.getElementById('alert18').innerHTML = newSegment;
      document.getElementById('alert18').className = 'alert alert-danger text-center';
  }
  else {
      for (var i=0; i<string.length; i++) {
          if (string.slice(i, i+1).match(/[a-z,A-Z]/g)) {
              if (string.slice(i, i+1).match(/[aeiou,AEIOU]/g)) {
                  vowels = vowels + 1;
              }
              else {
                  consonants = consonants + 1;
              }
          }
      }
      newSegment = 'String: <strong>"' + string + '"</strong><br> Vowels: <strong>"' + vowels + 
      '"</strong><br> Consonants: <strong>"' + consonants + '"</strong>';
      document.getElementById('alert18').innerHTML = newSegment;
      document.getElementById('alert18').className = 'alert alert-success text-center';
  }
}


// Function # 19 - Count total number of words in a string
function countWords() {
  var string = document.getElementById('wordsString').value;
  var oldString = string;
  var words = 0;
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert19').innerHTML = newSegment;
      document.getElementById('alert19').className = 'alert alert-danger text-center';
  }
  else {
      while (string.match('  ')) {
          string = string.replace('  ', ' ');
      }
      for (var i=1; i<string.length-1; i++) {
          if (string.slice(i, i+1) == ' '){
              words = words+1;
          }
      }
      newSegment = 'String: <strong>"' + oldString + '"</strong><br> Words: <strong>"' + (words+1) + 
      '"</strong>';
      document.getElementById('alert19').innerHTML = newSegment;
      document.getElementById('alert19').className = 'alert alert-success text-center';
  }
}


// Function # 20 - Find reverse of the string
function reverseString() {
  var string = document.getElementById('revString').value;
  var reverseString = '';
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert20').innerHTML = newSegment;
      document.getElementById('alert20').className = 'alert alert-danger text-center';
  }
  else {
      for (i=string.length; i>0; i--) {
          reverseString = reverseString + string.slice(i-1, i);
      }
      newSegment = 'String: <strong>"' + string + '"</strong><br> Reversed: <strong>"' + reverseString + 
      '"</strong>';
      document.getElementById('alert20').innerHTML = newSegment;
      document.getElementById('alert20').className = 'alert alert-success text-center';
  }
}


// Function # 21 - Check if the string is palindrome or not
function palindromeCheck() {
  var string = document.getElementById('palString').value;
  var reverseString = '';
  var status = 'none';
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert21').innerHTML = newSegment;
      document.getElementById('alert21').className = 'alert alert-danger text-center';
  }
  else {
      for (i=string.length; i>0; i--) {
          reverseString = reverseString + string.slice(i-1, i);
      }

      if (string == reverseString) {
          status = 'Palindrome';
      }
      else {
          status = 'not Palindrome';
      }
      newSegment = 'This string: <strong>"' + string + '"</strong><br> String is <strong>"' + status + 
      '"</strong>';
      document.getElementById('alert21').innerHTML = newSegment;
      document.getElementById('alert21').className = 'alert alert-success text-center';
  }
}


// Function # 22 - Reverse order of words
function reverseWords() {
  var string = document.getElementById('revWords').value;
  var reversedString = ''
  var word = ''
  var newSegment = '<strong>Please Enter a String!</strong>';
  if (string=="") {
      document.getElementById('alert22').innerHTML = newSegment;
      document.getElementById('alert22').className = 'alert alert-danger text-center';
  }
  else {
      while (string.match('  ')) {
          string = string.replace('  ', ' ');
      }
      for (var i=string.length; i>0; i--) {
          if (string.slice(i, i+1) != ' '){
              word = string.slice(i, i+1) + word;
          }
          else {
              if (reversedString == '') {
                  reversedString = word;
                  word = '';
              }
              else {
                  reversedString = reversedString + ' ' + word;
                  word = '';
              }
          }
      }
      reversedString = reversedString + ' ' + word;
      newSegment = 'String: <strong>"' + string + '"</strong><br> Reversed String: <strong>"' + reversedString + 
      '"</strong>';
      document.getElementById('alert22').innerHTML = newSegment;
      document.getElementById('alert22').className = 'alert alert-success text-center';
  }
}


// Function # 23 - Find first occurance of a character
function firstOccurance() {
  var string = document.getElementById('firstOccuString').value;
  var character = document.getElementById('firstOccuCharacter').value;
  var occurance = 'none';
  var newSegment = '<strong>Please Enter both String and Character!</strong>';
  if (string=='' || character=='') {
      document.getElementById('alert23').innerHTML = newSegment;
      document.getElementById('alert23').className = 'alert alert-danger text-center';
  }
  else {
      occurance = string.indexOf(character);

      if (occurance == -1) {
          occurance = 'not found';
      }

      newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
      '"</strong><br> First Occured at: <strong>"' + occurance + '"</strong>';
      document.getElementById('alert23').innerHTML = newSegment;
      document.getElementById('alert23').className = 'alert alert-success text-center';
  }
}


// Function # 24 - Find last occurance of a character
function lastOccurance() {
  var string = document.getElementById('lastOccuString').value;
  var character = document.getElementById('lastOccuCharacter').value;
  var occurance = 'none';
  var newSegment = '<strong>Please Enter both String and Character!</strong>';
  if (string=='' || character=='') {
      document.getElementById('alert24').innerHTML = newSegment;
      document.getElementById('alert24').className = 'alert alert-danger text-center';
  }
  else {
      occurance = string.lastIndexOf(character);

      if (occurance == -1) {
          occurance = 'not found';
      }
      
      newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
      '"</strong><br> Last Occured at: <strong>"' + occurance + '"</strong>';
      document.getElementById('alert24').innerHTML = newSegment;
      document.getElementById('alert24').className = 'alert alert-success text-center';
  }
}

