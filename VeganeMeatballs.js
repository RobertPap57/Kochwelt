function calculatePortion() {
  let portion = document.getElementById('portion-input').value;
  let a = 25;
  let b = 90;

  let d = 1;
  let e = 37.5;
  let f = 0.5;
  let g = 17.5;
  let h = 0.75;
  let i = 0.5;
 

  if(portion < 1) {
    alert('Eine Portion von diesem leckeren Gericht möchtest du bestimmt mindestens kochen! :)');
  } else if(portion > 10) {
    alert('Die maximale Portionsgröße ist 10!')
  } else {
        amountA = portion * a;
        document.getElementById('1').innerHTML = `${amountA} g trockene Linsen`;

        amountB = portion * b;
        document.getElementById('2').innerHTML = `${amountB} ml Wasser`;

        amountD = portion * d;
        document.getElementById('4').innerHTML = `${amountD} Knoblauchzehen`;

        amountE = portion * e;
        document.getElementById('5').innerHTML = `${amountE} g Pilze grob gehackt`;

        amountF = portion * f;
        document.getElementById('6').innerHTML = `${amountF} TL Kreuzkümmel gemahlen`;

        amountG = portion * g;
        document.getElementById('7').innerHTML = `${amountG} g Haferflocken`;

        amountH = portion * h;
        document.getElementById('8').innerHTML = `${amountH} EL frische Petersilie gehackt`;

        amountI = portion * i;
        document.getElementById('9').innerHTML = `${amountI} EL Sojasoße`;

  
    }
}
