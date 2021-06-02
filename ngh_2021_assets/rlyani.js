//Author: thenerdoflight
//Written for fade in animations on pictures in jadestudios.uk/ngh
//CSS dependents: tailwind.css and rlyani.css
//id are hardcoded to have the format of "rn" where n is a number (e.g. r1, r2 ...)

var numAni = 1; //hacky method of getting id 
const total_pic = 19;
const ani_time_delay = 250; //Time between animation in ms

addOpacity();
addFade();

//Adds fade in animation to all pictures in timed increments
async function addFade(){
    for (let i = 1; i <= total_pic; i++) {  
        let value = "r" + i;
        //console.log(value);
        let id = document.getElementById(value);
        //console.log(id);
        id.classList.remove("opacity-0");
        id.classList.add("r1-fadeIn");
        id.addEventListener('animationend', aniStop);
        await sleep(ani_time_delay);
    } 
}

//Adds opacity-0 to all images on page load
function addOpacity(){
    for (let i = 1; i <= total_pic; i++) {  
        let value = "r" + i;
        //console.log(value);
        let id = document.getElementById(value);
        //console.log(id);
        id.classList.add("opacity-0");
    } 
}

//Called when animations end to force opacity-1
function aniStop(){ 
    let value = "r" + numAni;
    let id = document.getElementById(value);
    id.classList.remove("r1-fadeIn");
    id.classList.add("opacity-1");
    numAni++;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }