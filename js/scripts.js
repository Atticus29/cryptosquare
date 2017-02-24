// Back End
var encrypt = function(str){
  var cleanStr = cleanUserInput(str);
  var numChar = cleanStr.length;
  var rowNum = Math.sqrt(findClosestSquareGreaterThan(numChar));
  var colNum = Math.ceil(numChar/rowNum);
  masterArray = [];
  for (var i = 0; i<rowNum; i++){
    masterArray.push(makeArray(colNum,i*colNum, cleanStr));
  }
  // console.log(masterArray);
  var finalStr="";
  for (var i = 0; i<rowNum; i++){
    masterArray.forEach(function(subArray){
      finalStr += subArray[i];
    });
  }
  // console.log(spaceEveryFifthChar(finalStr));
  return spaceEveryFifthChar(finalStr);
}
var spaceEveryFifthChar = function(str){
  var tmpArray = str.split("");
  for (var i=5; i<tmpArray.length; i+=6){
    tmpArray.splice(i,0," ");
  }
  return tmpArray.join("");
}
var makeArray = function (colNum, start, str){
  var newArray = [];
  for (var i = 0; i<colNum; i++){
    newArray.push(str[start+i]);
  }
  for (var i = 0; i<newArray.length; i++){
    if(newArray[i]==undefined){
      newArray[i]="";
    }
  }
  return newArray;
}

var findClosestSquareGreaterThan = function(num){
  var sqrt = Math.sqrt(num);
  var nextRt = Math.ceil(sqrt);
  return (Math.pow(nextRt,2));
}

var isPerfectSquare = function(num){
  return (Number.isInteger(Math.sqrt(num)));
}

var cleanUserInput = function(str){
  var regexNonChar = /\W/g;
  var regexDigits = /\d/g;
  str = str.replace(regexNonChar,"");
  str = str.replace(regexDigits,"");
  str = str.toLowerCase();
  return str;
}


// Front End
$(function(){
  $("#inputForm").submit(function(){
    $(".hiddenText").show();
    var inputText = $("#submitText").val();
    console.log(encrypt(inputText));
    $(".encryptedText").text(encrypt(inputText));

    event.preventDefault();
  });
});
