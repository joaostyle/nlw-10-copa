gitfunction createrGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/icon-${player1}.svg">
    <strong>${hour}</strong> <img src="./assets/icon-${player2}.svg">
  </li>
      `
}

let delay =0;
function creater(date, day,games,){
  delay = delay + 0.3;
  return  `
  <div class="card" style="animation-delay:${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML=

    creater('24/11', 'quinta',
     createrGame('brazil','16:00', 'serbia') + createrGame('switzerland', '7:00', 'cameroon') + createrGame('portugal', '13:00', 'ghana'))
     +
    creater('28/11', 'segunda', 
    createrGame('brazil', '13:00', 'switzerland')+ createrGame('portugal', '16:00', 'uruguai') + createrGame('corea', '10:00', 'ghana')) 
     +
    creater('02/12', 'sexta', createrGame('brazil', '16:00', 'cameroon'))   
   
