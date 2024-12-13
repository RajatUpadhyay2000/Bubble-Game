function makeBubble(){
    var clutter = "";

    for(let i = 1 ; i <= 70 ; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter
}

var timer = 10;
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = "";
        }
    },1000);
}

var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener('click',function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit();
runTimer();
makeBubble();
