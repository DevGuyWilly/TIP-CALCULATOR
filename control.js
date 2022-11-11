//  THREE FUNCTINS IN THE TIP CALCULATOR
//CALCULATE BILL
//INCREASE_PEOPLE
//DECREASE_PEOPLE

//GETTING GLOBAL ACCESS TO ALL INPUTS(BILL, TIP, NO. OF PEOPLE AND PER PERSON TOTAL)
const billInput = document.getElementById("billTotalInput");
const billTipInput = document.getElementById("tipInput");
const numOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPTotal");

//NO. OF PEOPLE
let numberOfPeople = Number(numOfPeople.innerText);

// CALACULATE THE TOTAL BILL PER PERSON
const calculateBill = () => {
  //GET INPUT and TYPE CAST TO INTERGER
  bill = Number(billInput.value);

  //GET TIP AND CONVVERT INTO PERCENTAGE
  //tip = Number(bill / 100);
  tipPercentage = Number(billTipInput.value) / 100;

  //GET TIP TOTAL
  tipTotal = Number(bill * tipPercentage);

  //TOTAL TO PAY
  total = bill + tipTotal;

  //CALCULATE THE PERSON TOTAL(TOTAL DIVIDED BY NUMBER OF PEOPLE)
  perPersonBill = total / numberOfPeople;
  perPersonBill = `$${perPersonBill}`;
  console.log({ perPersonBill });

  //UPDATE PER PERSON TOTAL AND UPDATE TO THE DOM AND SHOW IT TO USER
  //perPersonTotal.innerText = (perPersonBill);
  document.getElementById("perPTotal").innerText = perPersonBill;
};

//SPILTS THE BILL BETWEEN MORE PEOPLE

increasePeople = () => {
  if (numberOfPeople > 0) {
    numberOfPeople += 1;
    document.getElementById("numberOfPeople").innerText = numberOfPeople;
  }
  console.log({ numberOfPeople });
  calculateBill();
};

//SPILTS THE BILL BETWEEN FEWER PEOPLE
const decreasePeople = () => {
  if (numberOfPeople > 1) {
    numberOfPeople -= 1;
    document.getElementById("numberOfPeople").innerText = numberOfPeople;
  }
  console.log({ numberOfPeople });
  calculateBill();
};
// const display = () => {
//     var x = document.getElementById('billInput').value;
//     // document.getElementById('perPTotal').innerText = x;
//     console.log(x);
// }
