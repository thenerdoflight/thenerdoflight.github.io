var userHP = 100;
var opHP = 100;
var pikalvl = 22;
opAttacks = [covid, toiletPaper, maskMe, myDamnFreedom];
opAttacksEvo = [getOlder, throwBeer, throwWings, idk];
playerMove = 0;
var evo = 0;


/* users moves */
function quickAttack() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); // miss rate
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Pikachu's attack missed! ";
    }
    else {
      document.getElementById('message').innerHTML = " Pikachu used Quick Attack "; // attack
      var critical = Math.floor((Math.random() * 10) + 1); // critical
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 20; // yes critical
        }
      }
      else {
        opHP = opHP - 20; // no critical
      }
      if (opHP < 0) { opHP = 0 } //faint
      document.getElementById('apHP').innerHTML = opHP; // update hp
      if (opHP == 0) { //check faint
        if (evo == 1) { //check evolution
          document.getElementById('message').innerHTML = " Twenty Two fainted! " // update message

        } else {
          document.getElementById('message').innerHTML = " Twenty Twenty fainted! " // update message

        }

      }
    }
    playerMove = 1; // update player move

    document.getElementById('actionButton').style.visibility = "hidden";
    document.getElementById('continue').style.visibility = "visible";

    evoCheck(); //evolve if okay
    if (opHP == 0) {
      gameOverButtonUp();
    } //game over button turn up
  }
}

function ironTail() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Pikachu's attack missed! "
    }
    else {
      document.getElementById('message').innerHTML = " Pikachu used Iron Tail ";
      var critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 15;
        }
      }
      else {
        opHP = opHP - 15;
      }
      if (opHP < 0) { opHP = 0 }
      document.getElementById('apHP').innerHTML = opHP;
      if (opHP == 0) {
        if (evo == 1) {
          document.getElementById('message').innerHTML = " Twenty Two fainted! " // update message

        } else {
          document.getElementById('message').innerHTML = " Twenty Twenty fainted! " // update message

        }

      }
    }
    playerMove = 1;

    document.getElementById('actionButton').style.visibility = "hidden";
    document.getElementById('continue').style.visibility = "visible";

    evoCheck();
    if (opHP == 0) {
      gameOverButtonUp();
    }
  }
}

function thunderbolt() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Pikachu's attack missed! "
    }
    else {
      document.getElementById('message').innerHTML = " Pikachu used Thunderbolt ";
      var critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 30;
        }
      }
      else {
        opHP = opHP - 30;
      }
      if (opHP < 0) { opHP = 0 }
      document.getElementById('apHP').innerHTML = opHP;
      if (opHP == 0) {
        if (evo == 1) {
          document.getElementById('message').innerHTML = " Twenty Two fainted! " // update message

        } else {
          document.getElementById('message').innerHTML = " Twenty Twenty fainted! " // update message

        }

      }
    }
    playerMove = 1;

    document.getElementById('actionButton').style.visibility = "hidden";
    document.getElementById('continue').style.visibility = "visible";

    evoCheck();
    if (opHP == 0) {
      gameOverButtonUp();
    }
  }
}
function playNice() {
  if (playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
      document.getElementById('message').innerHTML = " Pikachu's attack missed! "
    }
    else {
      document.getElementById('message').innerHTML = " Pikachu used Play Nice ";
      var critical = Math.floor((Math.random() * 10) + 1);
      if (critical == 4) {
        for (var x = 0; x < 2; x++) {
          opHP = opHP - 5;
        }
      }
      else {
        opHP = opHP - 5;
      }
      if (opHP < 0) { opHP = 0 }
      document.getElementById('apHP').innerHTML = opHP;
      if (opHP == 0) {
        if (evo == 1) {
          document.getElementById('message').innerHTML = " Twenty Two fainted! " // update message
        } else {
          document.getElementById('message').innerHTML = " Twenty Twenty fainted! " // update message

        }

      }
    }

    playerMove = 1;

    document.getElementById('actionButton').style.visibility = "hidden";
    document.getElementById('continue').style.visibility = "visible";

    evoCheck();

    if (opHP == 0) {
      gameOverButtonUp();
    }

  }
}



/* opponent's moves */

function covid() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Twenty's attack missed! " // attack missed
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Twenty used COVID " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
    if (critical == 4) {
      for (var x = 0; x < 2; x++) { // yes critical
        userHP = userHP - 30;
      }
    }
    else {
      userHP = userHP - 30; // no critical
    }
    if (userHP < 0) { userHP = 0 } // faint
    document.getElementById('myHP').innerHTML = userHP; // update hp
    if (userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Pikachu fainted! " // fainted
      gameOverButtonUp();
    }
  }
}

function toiletPaper() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Twenty's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Twenty used Toilet Paper "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 20;
      }
    }
    else {
      userHP = userHP - 20;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function maskMe() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Twenty's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Twenty used Mask Me MAN "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 10;
      }
    }
    else {
      userHP = userHP - 10;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function myDamnFreedom() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Twenty's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Twenty used MY DAMN FREEDOM "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 5;
      }
    }
    else {
      userHP = userHP - 5;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function getOlder() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Two's attack missed! " // attack missed
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Two leveled you up? " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
    if (critical == 4) {
      for (var x = 0; x < 2; x++) { // yes critical
        pikalvl++;
      }
    }
    else {
      pikalvl++; // no critical
    }
    document.getElementById('myLVL').innerHTML = pikalvl;
    if (userHP < 0) { userHP = 0 } // faint
    document.getElementById('myHP').innerHTML = userHP; // update hp
    if (userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Pikachu fainted! " // fainted
      gameOverButtonUp();
    }
  }
}

function throwBeer() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Two's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Two throws some beer "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 20;
      }
    }
    else {
      userHP = userHP - 20;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function throwWings() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Two's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Two throws wings "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 10;
      }
    }
    else {
      userHP = userHP - 10;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function idk() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if (miss == 1) {
    document.getElementById('message').innerHTML = " Twenty Two's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Twenty Two used idk lmao "
    var critical = Math.floor((Math.random() * 10) + 1);
    if (critical == 4) {
      for (var x = 0; x < 2; x++) {
        userHP = userHP - 5;
      }
    }
    else {
      userHP = userHP - 5;
    }
    if (userHP < 0) { userHP = 0 }
    document.getElementById('myHP').innerHTML = userHP;
    if (userHP == 0) {
      document.getElementById('message').innerHTML = " Pikachu fainted! "
      gameOverButtonUp();
    }
  }
}

function compPokemon() { // continue
  if (playerMove == 1 && opHP != 0) { // whos move
    document.getElementById('actionButton').style.visibility = "visible";
    document.getElementById('continue').style.visibility = "hidden";

    evoCheck();

    var move = Math.floor((Math.random() * 3) + 1); // choose move randomly

    if (evo == 1) {
      opAttacksEvo[move](); // call attack from array

    } else {
      opAttacks[move](); // call attack from array

    }

    playerMove = 0; // update player move

  }


}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  //https://www.sitepoint.com/delay-sleep-pause-wait/
}

function gameOverButtonUp() { //turns up the game over button

  if (opHP == 0) {
    setTimeout(hold, 2000);
    document.getElementById('message').innerHTML = "Game Over - Twenty Two fainted";
  } else {
    setTimeout(hold, 2000);
    document.getElementById('message').innerHTML = "Game Over - Pikachu fainted";
  }
  setTimeout(hold, 2000);
  document.getElementById('actionButton').style.visibility = "hidden";
  document.getElementById('continue').style.visibility = "hidden";
  document.getElementById('gameOver').style.visibility = "visible";


}

function evoCheck() { //Checks for half hp to evolve
  if (evo == 0 && opHP <= 50) {
    document.getElementById('message').innerHTML = "";
    evolve();
    setTimeout(hold, 3000);
  };
}

function evolve() { //Evolve by changing sprite and hp
  document.getElementById('actionButton').style.visibility = "hidden";
  document.getElementById('continue').style.visibility = "hidden";
  document.getElementById('message').innerHTML = "2020 is evolving to 22!";
  setTimeout(evoChangePic, 1000);
  //https://stackoverflow.com/questions/20890943/javascript-settimeout-not-working

  evo = 1;
  opHP = 100;
  document.getElementById('apHP').innerHTML = opHP;
  document.getElementById('continue').style.visibility = "visible";

}

function evoChangePic() {
  document.getElementById('opPokemon').src = '../str_images/22.gif';
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb

}

function hold() {
  //Does nothing
}

function reload() { //Reloads the game
  poke = parent.document.getElementById('poke');
  poke.innerHTML = '';
  poke.innerHTML = '<object data="str_poke/pokemon.html" width="789" height="762"> </object>';
  document.getElementById('continue').style.visibility = "hidden";
  document.getElementById('gameOver').style.visibility = "hidden";
}