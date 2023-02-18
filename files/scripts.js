function positiveIntegerValidation(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && input>0) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}
function countIntegerValidation(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && input>=0) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}

function sysmexWBCValidation(id) {
  let input=parseFloat(document.getElementById(id).value);

  if (Number.isInteger(input) && input>=3) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}
//TODO:validate function linearity
function sysmexRBCValidation(id) {
  let input=parseFloat(document.getElementById(id).value);

  if (Number.isInteger(input) && input>=3) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}
//
function wbcSquareValidation(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && (input==4 || input==9)) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}
function wbcSquareColor(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && input==4) {
    document.getElementById("1").classList.add("wbc-background");
    document.getElementById("2").classList.add("wbc-background");
    document.getElementById("3").classList.add("wbc-background");
    document.getElementById("4").classList.add("wbc-background");
  }
  if (Number.isInteger(input) && input==9) {
    document.getElementById("1").classList.remove("wbc-background");
    document.getElementById("2").classList.remove("wbc-background");
    document.getElementById("3").classList.remove("wbc-background");
    document.getElementById("4").classList.remove("wbc-background");
  }
  else {
      document.getElementById("1").classList.add("wbc-background");
      document.getElementById("2").classList.add("wbc-background");
      document.getElementById("3").classList.add("wbc-background");
      document.getElementById("4").classList.add("wbc-background");
  }
}
function rbcSquareValidation(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && (input==225 || input==25 ||input==5)) {
    document.getElementById(id).classList.replace("fail", "input-background-color");
  }
  else {
    document.getElementById(id).classList.replace("input-background-color", "fail");
  }
}
function rbcSquareColor(id) {
  let input=parseFloat(document.getElementById(id).value);
  if (Number.isInteger(input) && input==5) {
    document.getElementById("middleSquare").classList.remove("rbc-background");
    document.getElementById("A").classList.add("rbc-background");
    document.getElementById("B").classList.add("rbc-background");
    document.getElementById("C").classList.add("rbc-background");
    document.getElementById("D").classList.add("rbc-background");
    document.getElementById("E").classList.add("rbc-background");
  }
  else if (Number.isInteger(input) && input==25) {
    document.getElementById("middleSquare").classList.add("rbc-background");
    
  }
  else if (Number.isInteger(input) && input==225) {
    document.getElementById("middleSquare").classList.remove("rbc-background");
    document.getElementById("A").classList.remove("rbc-background");
    document.getElementById("B").classList.remove("rbc-background");
    document.getElementById("C").classList.remove("rbc-background");
    document.getElementById("D").classList.remove("rbc-background");
    document.getElementById("E").classList.remove("rbc-background");
  }
}

function calculationWBC() {
  let count1=parseInt(document.getElementById("wbcChamberA").value);
  let count2=parseInt(document.getElementById("wbcChamberB").value);
  let average=Math.round((((count1+count2)/2)+Number.EPSILON)*100)/100;
  let absoluteDifference=Math.abs(count1-count2);
  //Percent change formula
  let percentChange=Math.round((Math.abs((count1-count2)/count1)+Number.EPSILON)*100);
  let percentString=String(percentChange+"%")
  let dilution=parseInt(document.getElementById("dilutionWBC").value);
  let square=parseInt(document.getElementById("wbcSquares").value);
  let totalCellCount=Math.round(Math.round((average*dilution*10/square+Number.EPSILON)*100)/100);
  
  if (Number.isInteger(count1) && Number.isInteger(count2) && count1>=0 && count2>=0 && average<=29 && absoluteDifference<=3) {
    document.getElementById("wbcQCAbsolute").innerHTML=absoluteDifference;
    document.getElementById("wbcQCPercent").innerHTML="N/A";
    document.getElementById("averageWBC").innerHTML=average;
    document.getElementById("totalWBC").innerHTML=totalCellCount;
    document.getElementById("wbcQCAbsolute").classList.remove("fail");
    document.getElementById("wbcQCAbsolute").classList.add("pass");
    document.getElementById("wbcQCPercent").classList.remove("pass");
    document.getElementById("wbcQCPercent").classList.add("fail");
    document.getElementById("averageWBC").classList.remove("fail");
    document.getElementById("averageWBC").classList.add("pass");
    document.getElementById("totalWBC").classList.remove("fail");
    document.getElementById("totalWBC").classList.add("pass");
  }
  else if (Number.isInteger(count1) && Number.isInteger(count2) && count1>=0 && count2>=0 && average>29 && percentChange<=15) {
    document.getElementById("wbcQCPercent").innerHTML=percentString;
    document.getElementById("wbcQCAbsolute").innerHTML="N/A";
    document.getElementById("averageWBC").innerHTML=average;
    document.getElementById("totalWBC").innerHTML=totalCellCount;
    document.getElementById("wbcQCPercent").classList.remove("fail");
    document.getElementById("wbcQCPercent").classList.add("pass");
    document.getElementById("wbcQCAbsolute").classList.remove("pass");
    document.getElementById("wbcQCAbsolute").classList.add("fail");
    document.getElementById("averageWBC").classList.remove("fail");
    document.getElementById("averageWBC").classList.add("pass");
    document.getElementById("totalWBC").classList.remove("fail");
    document.getElementById("totalWBC").classList.add("pass");
  }
  else {
    document.getElementById("wbcQCAbsolute").innerHTML="Out of Range";
    document.getElementById("wbcQCPercent").innerHTML="Out of Range";
    document.getElementById("averageWBC").innerHTML=average;
    document.getElementById("totalWBC").innerHTML=totalCellCount;
    document.getElementById("wbcQCAbsolute").classList.remove("pass");
    document.getElementById("wbcQCPercent").classList.remove("pass");
    document.getElementById("wbcQCAbsolute").classList.add("fail");
    document.getElementById("wbcQCPercent").classList.add("fail");
    document.getElementById("averageWBC").classList.remove("pass");
    document.getElementById("averageWBC").classList.add("fail");
    document.getElementById("totalWBC").classList.remove("pass");
    document.getElementById("totalWBC").classList.add("fail");
  }
}

function infoWBC() {
  let square=parseInt(document.getElementById("wbcSquares").value);
  if (square==4) {
    document.getElementById("squareInfoWBC").classList.remove("d-none");
  }
}

function alertsWBC() {
  let count1=parseInt(document.getElementById("wbcChamberA").value);
  let count2=parseInt(document.getElementById("wbcChamberB").value);
  let absoluteDifference=Math.abs(count1-count2);
  let percentChange=Math.round((Math.abs((count1-count2)/count1)+Number.EPSILON)*100);

  if (absoluteDifference>3 || percentChange >15) {
    document.getElementById("absoluteWarningWBC").classList.remove("d-none");
    document.getElementById("percentWarningWBC").classList.remove("d-none");
  }
}

function calculationRBC() {
  let count1=parseInt(document.getElementById("rbcChamberA").value);
  let count2=parseInt(document.getElementById("rbcChamberB").value);
  let average=Math.round((((count1+count2)/2)+Number.EPSILON)*100)/100;
  let absoluteDifference=Math.abs(count1-count2);
  //Percent change formula
  let percentChange=Math.round((Math.abs((count1-count2)/count1)+Number.EPSILON)*100);
  let percentString=String(percentChange+"%")
  let dilution=parseInt(document.getElementById("dilutionRBC").value);
  let square=parseInt(document.getElementById("rbcSquares").value);
  let totalCellCount=Math.round(Math.round(((average*dilution)/(square*0.004)+Number.EPSILON)*100)/100);
  console.log(totalCellCount);
  
  if (Number.isInteger(count1) && Number.isInteger(count2) && count1>=0 && count2>=0 && average<=29 && absoluteDifference<=3) {
    document.getElementById("rbcQCAbsolute").innerHTML=absoluteDifference;
    document.getElementById("rbcQCPercent").innerHTML="N/A";
    document.getElementById("averageRBC").innerHTML=average;
    document.getElementById("totalRBC").innerHTML=totalCellCount;
    document.getElementById("rbcQCAbsolute").classList.remove("fail");
    document.getElementById("rbcQCAbsolute").classList.add("pass");
    document.getElementById("rbcQCPercent").classList.remove("pass");
    document.getElementById("rbcQCPercent").classList.add("fail");
    document.getElementById("averageRBC").classList.remove("fail");
    document.getElementById("averageRBC").classList.add("pass");
    document.getElementById("totalRBC").classList.remove("fail");
    document.getElementById("totalRBC").classList.add("pass");
  }
  else if (Number.isInteger(count1) && Number.isInteger(count2) && count1>=0 && count2>=0 && average>29 && percentChange<=15) {
    document.getElementById("rbcQCPercent").innerHTML=percentString;
    document.getElementById("rbcQCAbsolute").innerHTML="N/A";
    document.getElementById("averageRBC").innerHTML=average;
    document.getElementById("totalRBC").innerHTML=totalCellCount;
    document.getElementById("rbcQCPercent").classList.remove("fail");
    document.getElementById("rbcQCPercent").classList.add("pass");
    document.getElementById("rbcQCAbsolute").classList.remove("pass");
    document.getElementById("rbcQCAbsolute").classList.add("fail");
    document.getElementById("averageRBC").classList.remove("fail");
    document.getElementById("averageRBC").classList.add("pass");
    document.getElementById("totalRBC").classList.remove("fail");
    document.getElementById("totalRBC").classList.add("pass");
  }
  else {
    document.getElementById("rbcQCAbsolute").innerHTML="Out of Range";
    document.getElementById("rbcQCPercent").innerHTML="Out of Range";
    document.getElementById("averageRBC").innerHTML=average;
    document.getElementById("totalRBC").innerHTML=totalCellCount;
    document.getElementById("rbcQCAbsolute").classList.remove("pass");
    document.getElementById("rbcQCPercent").classList.remove("pass");
    document.getElementById("rbcQCAbsolute").classList.add("fail");
    document.getElementById("rbcQCPercent").classList.add("fail");
    document.getElementById("averageRBC").classList.remove("pass");
    document.getElementById("averageRBC").classList.add("fail");
    document.getElementById("totalRBC").classList.remove("pass");
    document.getElementById("totalRBC").classList.add("fail");
  }
}

function infoRBC() {
  let square=parseInt(document.getElementById("rbcSquares").value);
  if (square==25 || square==5) {
    document.getElementById("squareInfoRBC").classList.remove("d-none");
  }
}

function alertsRBC() {
  let count1=parseInt(document.getElementById("rbcChamberA").value);
  let count2=parseInt(document.getElementById("rbcChamberB").value);
  let absoluteDifference=Math.abs(count1-count2);
  let percentChange=Math.round((Math.abs((count1-count2)/count1)+Number.EPSILON)*100);

  if (absoluteDifference>3 || percentChange>15) {
    document.getElementById("absoluteWarningRBC").classList.remove("d-none");
    document.getElementById("percentWarningRBC").classList.remove("d-none");
  }
}



