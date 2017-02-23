// Back End
var encrypt = function(str){
  var cleanStr = cleanUserInput(str);
  var numChar = cleanStr.length;
  // if(isPerfectSquare(numChar)){
  //   var rowNum = Math.sqrt(numChar);
  //   var colNum = Math.sqrt(numChar);
  // }else{
  // }
  // console.log(numChar);
  var rowNum = Math.sqrt(findClosestSquareGreaterThan(numChar));
  // console.log(rowNum);
  var colNum = Math.ceil(numChar/rowNum);
  // console.log(rowNum);
  // console.log(colNum);

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
