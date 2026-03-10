const box = document.getElementById("gameBox");
const result = document.getElementById("result");

let startTime;
let waiting = false;

box.addEventListener("click", () => {

if(!waiting){

box.textContent = "Bekle....";
box.style.background = "red";

let delay = Math.random()*3000+1000;

waiting = true;

setTimeout(() => {

box.textContent = "TIKLA!";
box.style.background = "green";

startTime = Date.now();

},delay);

}else{

let reaction = Date.now() - startTime;

result.textContent = "Reaction Time: " + reaction + " ms";

box.textContent = "Tekrar Başla";
box.style.background = "red";

waiting = false;

}

});