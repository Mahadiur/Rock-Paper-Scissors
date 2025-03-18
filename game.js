// score
let userscore=0;
let compscore=0;
let msg=document.querySelector('#resultpara');
let userclass=document.querySelectorAll('.imgbox');
let userid=document.querySelector('#userscore');
let compid=document.querySelector('#compscore');
let clearbutton=document.querySelector('#clearbutton');

// Computer Genarate option
const compgenop=()=>{
    const option=['rock','paper','scissors'];
    const indexnum=Math.floor(Math.random()*3);
    return option[indexnum];
}

// User chose option
userclass.forEach((imgbox)=>{
    imgbox.addEventListener('click',()=>{
        const useroption=imgbox.getAttribute('id');
        playgame(useroption);
    });
});

// draw function
const drawgame=()=>{
    msg.innerText='Game is Draw .Try again.';
    msg.style.backgroundColor='yellow';
}

// Main Game Logic
const playgame=(useroption)=>{
    // Computer Genaration
    const compgen=compgenop();
    if (useroption === compgen){
        drawgame();  
    }else{
        let userwin=true;
        if(useroption==='rock'){
            // scissors & paper
           userwin=compgen===paper?false:true;
        }else if(useroption==='paper'){
            //rock & scissors  
        userwin=compgen==='scissors'?false:true;
        }else if(useroption==='scissors'){
            // paper & rock
            userwin=compgen==='rock'?false:true;
        }
        showergame(userwin,useroption,compgenop);
    }
}

const showergame=(userwin)=>{
    if(userwin){
        userscore++;
        userid.innerText=userscore;
        msg.innerText=`Are You WIN!`;
        msg.style.backgroundColor='green';
    }else{
        compscore++;
        compid.innerText=compscore;
        msg.innerText=`Are You LOST.`;
        msg.style.backgroundColor='red';
    }
}

clearbutton.addEventListener('click',()=>{
    userid.innerText=0;
    compid.innerText=0;

})