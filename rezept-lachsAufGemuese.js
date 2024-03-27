function calculatePortion() {
  let portion = document.getElementById("portion-input").value;
  let a = 200;
  let b = 75;
  let c = 100;
  let d = 0.25;
  let e = 0.5;
  let f = 0.5;
  let g = 3;
  let h = 40;
  /*
  let i = 0.25;
  let j = 0.1;
  */

  if (portion < 1) {
    alert(
      "Eine Portion von diesem leckeren Gericht möchtest du bestimmt mindestens kochen! :)"
    );
  } else if (portion > 10) {
    alert("Die maximale Portionsgröße ist 10!");
  } else {
    amountA = portion * a;
    document.getElementById("1").innerHTML = `${amountA} g Lachsfilet`;

    amountB = portion * b;
    document.getElementById("2").innerHTML = `${amountB} g Zucchini`;

    amountC = portion * c;
    document.getElementById("3").innerHTML = `${amountC} g Spinat`;

    amountD = portion * d;
    document.getElementById("4").innerHTML = `${amountD} Knoblauchzehe(n)`;

    amountE = portion * e;
    document.getElementById("5").innerHTML = `${amountE} Stk Paprika (rot)`;

    amountF = portion * f;
    document.getElementById("6").innerHTML = `${amountF} Stk Paprika (gelb)`;

    amountG = portion * g;
    document.getElementById("7").innerHTML = `${amountG} Blätter Basilikum`;

    amountH = portion * h;
    document.getElementById("8").innerHTML = `${amountH} ml Olivenöl`;

    /*amountI = portion * i;
    document.getElementById("9").innerHTML = `${amountI} TL Salz`;

    amountJ = portion * j;
    document.getElementById("10").innerHTML = `${amountJ} TL Pfeffer`;
    */
  }
}
