// usando If

var userOption = document.getElementById('userOption');
var pcOption = document.getElementById('pcOption');
var result = document.getElementById('result');
var userCounter = document.getElementById('userCounter');
var pcCounter = document.getElementById('pcCounter');
var firstCount = 0;
var secondCount = 0;

function option(user) {
  var option = ['Piedra', 'Papel', 'Tijera'];

  // Generamos un número al azar entre 0 y 2 para que sea la opción seleccionada de la computadora
  var pc = Math.floor(Math.random() * 3);

  // Pintando la opción que elige tanto el usuario como la computadora
  userOption.innerHTML = option[user];
  pcOption.innerHTML = option[pc];

  if (option[user] !== option[pc]) {
    if (
      (option[user] === 'Piedra' && option[pc] === 'Tijera') ||
      (option[user] === 'Papel' && option[pc] === 'Piedra') ||
      (option[user] === 'Tijera' && option[pc] === 'Papel')
    ) {
      result.innerHTML = '¡Ganaste!';
      firstCount += 1;
      result.style.background = '#bbf7d0';
      result.style.color = '#059669';
      userCounter.innerHTML = firstCount;
    } else {
      result.innerHTML = '¡Perdiste!';
      secondCount += 1;
      pcCounter.innerHTML = secondCount;
      result.style.background = '#FECACA';
      result.style.color = '#DC2626';
    }
  } else {
    result.innerHTML = '¡Empataste!';
    result.style.background = '#eef2ff';
    result.style.color = '#8889d3';
  }
}

// Usando Switch

var sUserOption = document.getElementById('sUserOption');
var sPcOption = document.getElementById('sPcOption');
var sResult = document.getElementById('sResult');
var sUserCounter = document.getElementById('sUserCounter');
var sPcCounter = document.getElementById('sPcCounter');
var sFirstCount = 0;
var sSecondCount = 0;

function sOption(sUser) {
  var sOption = ['Piedra', 'Papel', 'Tijera'];

  // Generamos un número al azar entre 0 y 2 para que sea la opción seleccionada de la computadora
  var sPc = Math.floor(Math.random() * 3);

  // Pintando la opción que elige tanto el usuario como la computadora
  sUserOption.innerHTML = sOption[sUser];
  sPcOption.innerHTML = sOption[sPc];

  switch (sOption[sUser] + sOption[sPc]) {
    case 'PapelPiedra':
    case 'PiedraTijera':
    case 'TijeraPapel':
      sResult.innerHTML = '¡Ganaste!';
      sFirstCount += 1;
      sResult.style.background = '#bbf7d0';
      sResult.style.color = '#059669';
      sUserCounter.innerHTML = sFirstCount;

      break;

    case 'PiedraPapel':
    case 'PapelTijera':
    case 'TijeraPiedra':
      sResult.innerHTML = '¡Perdiste!';
      sSecondCount += 1;
      sPcCounter.innerHTML = sSecondCount;
      sResult.style.background = '#FECACA';
      sResult.style.color = '#DC2626';

      break;

    case 'PiedraPiedra':
    case 'PapelPapel':
    case 'TijeraTijera':
      sResult.innerHTML = '¡Empataste!';
      sResult.style.background = '#eef2ff';
      sResult.style.color = '#8889d3';

      break;
  }
}