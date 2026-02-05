let body=document.querySelector('body');
let h2=document.querySelector('h2');
let highScore=0;
let level=0;
let userSeq=[] ,gameSeq=[];
let gameStarted=false;
let colors=['green','red','purple','yellow'];
let score=document.querySelector('.score');
body.addEventListener('keydown',function(){
    if(gameStarted==false){
    gameStarted=true;
    levelUp();
    }
});
function blink(btn){
     if (!btn) return; 
   btn.classList.add('flash')
   setTimeout(function(){
    btn.classList.remove('flash');
   }, 200);
}   
function printPrv(){
   let i=0;
   const id=setInterval(() => {
    blink(document.querySelector(`#${gameSeq[i]}`));
    i++;
    if(i>=gameSeq.length){
        clearInterval(id);
    }
   }, 300);
    
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
   
     
    let randColor=colors[Math.floor(Math.random()*4)];
    gameSeq.push(randColor);
     printPrv();
 
}
function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start again `;
        body.style.backgroundColor='#8b2f2f';
        setTimeout(function(){
            body.style.backgroundColor='#7e8180';
        } , 150);
        if(level>highScore){
            highScore=level;
            score.textContent = `Highest Score: ${highScore}`;
        }
       reset();
    }
}
function btnPress(){
    blink(this);
    userSeq.push(this.getAttribute('id'));
    check(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.box');
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    gameStarted=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}