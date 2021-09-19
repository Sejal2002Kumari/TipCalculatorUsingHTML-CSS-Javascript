document.getElementById("button").onclick = function () {
  var spaceForAbount = document.getElementById("spaceForAbount").value;
  var selectOption = document.getElementById("selectOption").value;
  var NumberOfPeople = document.getElementById("NumberOfPeople").value;
  var total;
  
  if (spaceForAbount === "" || selectOption == 0) {
    alert("please enter correct value");
  } else if (NumberOfPeople === "" || NumberOfPeople <= 1) {
    NumberOfPeople = 1;
     total = (spaceForAbount * selectOption) / NumberOfPeople;
      total = Math.round(total);
    document.getElementById("valueAfterCalculation").innerText =
      "Rs" + " " + total;
  } else {
     total = (spaceForAbount * selectOption) / NumberOfPeople;
    total = Math.round(total);
    if (total == 0) {
      total = 1;
      document.getElementById("valueAfterCalculation").innerText =
        "Rs" + " " + total;
    } else {
      document.getElementById("valueAfterCalculation").innerText =
        "Rs" + " " + total + " " + "each";
    }
  }
};
