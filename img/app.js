  //====================variables====================================
  let trous = document.querySelectorAll('.trou');
  let scoreBoard = document.querySelector('.score');
  let animals = document.querySelectorAll('.animal');
  let lasttrou;
  let timeUp = false;
  let score = 0;
 //====================== fonction aleatoire =========================AHS=======
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
//=========================================trou=================================
  function randomtrou(trous) {
    let idx = Math.floor(Math.random() * trous.length);
    let trou = trous[idx];
    if (trou === lasttrou) {
      //console.log('Ah nah thats the same one bud');
      return randomtrou(trous);
    }
    lasttrou = trou;
    return trou;
  }
//mouvement du renard et sa vitesse
  function peep() {
    let time = randomTime(500, 1800);
    let trou = randomtrou(trous);
    trou.classList.add('up');
    setTimeout(() => {
      trou.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }
//================================================================
  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }

  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  animals.forEach(animal => animal.addEventListener('click', bonk));