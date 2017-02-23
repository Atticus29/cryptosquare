// Back End
var encrypt = function(str){
  var cleanStr = cleanUserInput(str);
  // console.log(cleanStr);
  var numChar = cleanStr.length;
  // console.log(numChar);
  var rowNum = Math.sqrt(findClosestSquareGreaterThan(numChar));
  // console.log(rowNum);
  var colNum = Math.ceil(numChar/rowNum);
  // console.log(rowNum);
  // console.log(colNum);
  masterArray = [];
  for (var i = 0; i<rowNum; i++){
    masterArray.push(makeArray(colNum,i*colNum, cleanStr));
  }
  console.log(masterArray);

}

var makeArray = function (colNum, start, str){
  var newArray = [];
  for (var i = 0; i<colNum; i++){
    newArray.push(str[start+i]);
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
    $(".encrytedText").text(encrypt(inputText));
    event.preventDefault();
  });
});
