function calculatePortion() {
  let portion = document.getElementById('portion-input').value;
  let a = 2;
  let b = 50;
  let c = 3;
  let d = 1;
  let e = 1;
  let f = 0.5;
  

  if(portion < 1) {
    alert('Eine Portion von diesem leckeren Gericht möchtest du bestimmt mindestens kochen! :)');
  } else if(portion > 10) {
    alert('Die maximale Portionsgröße ist 10!')
  } else {
        amountA = portion * a;
        document.getElementById('1').innerHTML = `${amountA} Eier`;

        amountB = portion * b;
        document.getElementById('2').innerHTML = `${amountB} ml Milch`;

        amountC = portion * c;
        document.getElementById('3').innerHTML = `${amountC} Scheiben Toastbrot`;

        amountD = portion * d;
        document.getElementById('4').innerHTML = `${amountD} Prise Salz`;

        amountE = portion * e;
        document.getElementById('5').innerHTML = `${amountE} TL Vanilleextrakt (optional)`;

        amountF = portion * f;
        document.getElementById('6').innerHTML = `${amountF} TL Zimt (optional)`;


    }
}
