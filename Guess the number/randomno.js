let guess=(Math.floor(Math.random()*100+1))
console.log(guess)
let attempt=0;
let reset=1;

function check(){
   
    let disp=document.getElementById('comments')
    let attempts=document.getElementById('times')
    attempt++;
    let gvn=document.forms[0]['input'].value

 if(reset==1){
    if(gvn==guess){
        disp.innerHTML="Your guess is ryt!"
        attempts.innerHTML='No.of guesses: ' +attempt;
        document.getElementById('second').innerHTML="Reset"
        reset=0;
    }
    else if(gvn>guess){
        disp.innerHTML="Try lower value"
        attempts.innerHTML='No.of guesses: ' +attempt;
    }
    else{
       disp.innerHTML='Oops! Guess Higher'
       attempts.innerHTML='No.of guesses: ' +attempt;
        }
}


else{
    reset=1;
    rematch()
}
}

function rematch(){
    let gvn=document.forms[0]['input'].value=null
    guess=(Math.floor(Math.random()*100+1))
    console.log(guess)
    document.getElementById('second').innerHTML="Check"
    attempt=0;
    let attempts=document.getElementById('times')
    attempts.innerHTML='No.of guesses: ' +attempt;
    
}
