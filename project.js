
let audio=document.querySelector(".my");
let canvas=document.querySelector(".pingpong");
let c=canvas.getContext("2d");
let tx=window.innerWidth;
let ty=window.innerHeight;
canvas.width=tx;

canvas.height=ty; 
let interval;
let time= new Date();
let backgroundcolor=["red","green","blue","orange","violet","grey","aqua","aquamarine","crimson","bluevoilet","brown","burlywood","cadetblue","chartreuse","chocolate","cornflowerblue","cyan","darkblue","darkcyan","darkgolden","darkgoldenrod","darkgray","darkkhaki"];
backgroundcolorset();
function backgroundcolorset(){let left=-140;
    let top=0;
    for(let i=0; i<backgroundcolor.length;i++){
        
        console.log(i%7);
       if((i%6==0)&&(i!=0)){
           top=top+160;
           left=20;
       }
       else{
           left=left+160;
       }
       
        backgroundset(backgroundcolor[i], left,top);
    }


}


let inputcolor=document.querySelector(".background-color-input");
inputcolor.addEventListener("change",()=>{
    let inputcontainer=document.querySelector("#setcolor");
    inputcontainer.style.background=inputcolor.value;

});
function back(){
    let  backgroundcolorcontainer=document.querySelector(".backgound-color-container");
    backgroundcolorcontainer.style.display="none";
    let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="block";
    let manu =document.querySelector(".manu");
    manu.style.display="block";
}

function backgroundopen(){
    let settingcontainer=document.querySelector(".setting-container2");
    settingcontainer.style.display="none";
    let  backgroundcolorcontainer=document.querySelector(".backgound-color-container");
    backgroundcolorcontainer.style.display="block";

}
function canvascolor(){
    let setcolor=document.querySelector("#setcolor");
 canvas.style.background=setcolor.style.background;
}
function backgroundset(x,left,top){
    console.log("left "+left+ " top "+top);
    let backgroundlist=document.querySelector(".background-color-list");
    let backgroundcontent=document.createElement("div");
    backgroundcontent.classList.add("background-content");
    backgroundcontent.addEventListener("click",()=>{
        canvas.style.background=x;
    });
    
        let backgroundHtml=`<div class="background-color" style="background:${x}; left:${left}px;top:${top}px;">`;
        backgroundcontent.innerHTML=backgroundHtml;
        backgroundlist.appendChild(backgroundcontent);
        console.log(x);
    
}
function setting(){
    let settingcontainer=document.querySelector(".setting-container2");
    settingcontainer.style.display="block";
    let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="none";
    let manu =document.querySelector(".manu");
    manu.style.display="none";
}


function start(){
    canvas.style.display="block";
    let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="none";

    let manu=document.querySelector(".manu");
    manu.style.display="none";
   interval= setInterval(vikas,1000/50);
   playsong();
}
let scorecontainer=document.querySelector(".score-container");
function display(){
    let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="block";
    let manu=document.querySelector(".manu");
    manu.style.display="block";

scorecontainer.style.display="none";
}
let i=0;
function playsong(){
    if(i==0){
        audio.play();
        i=1;

    }
    else
    {
        audio.pause();
        i=0;
    }
    

   
    
}

const user={ x:5,
    y:30,
color:"red",
width:30,
height:150, 
score:0,


}
const com={
    x:tx-40,
    y:30,
    color:"red",
    width:30,
    height:150,
    score:0,

}

const ball={
    x:tx/2,
    y:ty/2,
    color:"red",
    radius:20,
    speed:20,
    dx:5,
    dy:5,

}
const net2={
    x:tx/2,
    y:0,
    width:2,
    height:34,

}
let play;
function time2(){
    let time3=new Date();
    let minute=time3.getMinutes();
    //let minute=time3.getminutes()-time.getminutes();
    console.log(minute)
    
}

let k=0;
function update(){
   
c.clearRect(0, 0, tx, ty);
c.beginPath(); //console.log(c.beginPath());
c.arc( ball.x,ball.y,ball.radius,0,2*Math.PI,"false");
c.fillStyle="blue";
c.fill();
} let username;
function setusername(){
    let username=document.querySelector(".user-new-name");
    let usertext=document.querySelector(".user-text");
    usertext.innerText=username.value;
    console.log(usertext)
    let usercontainer=document.querySelector(".user-name-container");
    usercontainer.style.display="none";
    let manu=document.querySelector(".manu");
    manu.style.display="block";
    let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="block";

}
function Username2(){
    let usercontainer=document.querySelector(".user-name-container");
    usercontainer.style.display="block";
    let settingcontainer=document.querySelector(".setting-container2");
    settingcontainer.style.display="none";
}
function scoreshow(){
    let userscore=document.querySelector(".user-score-text");
    userscore.innerHTML=user.score;
    let comscore=document.querySelector(".com-score-text");
    comscore.innerText=com.score;
    
    let resulttext=document.querySelector(".score-result-text");
    resulttext.innerText=text;
    scorecontainer.style.display="block";
   

}
let text="";

function vikas(){
    tx=window.innerWidth;
    ty=window.innerHeight;
    canvas.width=tx;
    canvas.height=ty;
    net2.x=tx/2;
    com.x=tx-40;
     
    update();
    
    time2();
    let color="white";
    
    if(ball.y<ball.radius){
        ball.y=ball.radius;
    }
    
    if((ball.y+ball.radius>=ty)||(ball.y<=ball.radius)){
        ball.dy=-ball.dy;
        
    }
   /* if(ball.y<ball.radius){
        ball.dy=5;
    }*/
  if((ball.x+ball.radius>tx)||(ball.x<ball.radius)){
      if(ball.x>tx/2){
          user.score++;
      }
      else{
          com.score++;
      }
      
    ball.x=tx/2;
    ball.y=ty/2;
    ball.dy=-ball.dy;
   ball.dx=-ball.dx;
    }
    drewtext(user.score,2*tx/5,2*ty/7,color);
   drewtext(com.score,4*tx/5,2*ty/7,color);
    if(user.score>=3||com.score>=3){
        if((user.score>=3)&&(com.score<3))
        {
           text="YOU WIN";
    

        }
        else{
            text="YOU LOSE";
            
        }
        clearInterval(interval);
       scoreshow();
           
        canvas.style.display="none";
       
    
    ball.x=tx/2;
    ball.y=ty/2;
    ball.dx=5;
    ball.dy=5;
    ball.speed=20;
    user.score=0;
    com.score=0;


 
    playsong();
    audio.currentTime=0;
//let top=window.getComputedStyle(play).getPropertyValue("top");
   // console.log(top);
       /* user.score=0;
        com.score=0;*/
    }
   
    users();
    
    computer();
    net();
    let player=(ball.x>tx/2)? com:user;
    //console.log(collision(player,ball));
    if(collision(player,ball)){
        //console.log(ball.y-(player.y+player.height/2))
        let collisionpoint=(ball.y-(player.y+(player.height/2)))/(player.height/2);
        console.log(collisionpoint);
        console.log("ball.y"+ball.y +" " +"player.y"+player.y);
        let angle=collisionpoint*Math.PI/4; //console.log(collisionpoint)
        //ball.speed=Math.sqrt(Math.pow(ball.dx,2)+Math.pow(ball.dy,2));
       // console.log(ball.speed)
      
        let direction=(ball.x>tx/2)?-1:1;
        ball.dx=direction*ball.speed*Math.cos(angle);
        ball.dy=direction*ball.speed*Math.sin(angle);
        ball.speed=ball.speed+0.1;
        
    }

  
ball.x=ball.x+ball.dx;
ball.y=ball.y+ball.dy;}



function users(){user.y=y2;
    if(user.y+150<ty){
    c.fillRect(user.x,user.y,user.width,user.height);}
    else{user.y=ty-user.height;
        c.fillRect(user.x,user.y,user.width,user.height);
    }
    c.fillStyle="white";
    c.fill();
    
}
function computer(){
    let computerlevel=0.1;
    com.y=com.y+(ball.y-(com.y+com.height/2))*computerlevel;
    if(com.y+150<ty){ 
        if(com.y<0){
            com.y=0;
        }
    c.fillRect(com.x,com.y,com.width,com.height);}
    else{
       
    com.y=ty-com.height;
        c.fillRect(com.x,com.y,com.width,com.height);
    }
 
    c.fillStyle="white";
    c.fill();
    

}

let x2,y2;

addEventListener("mousemove",function(){
    x2=event.clientX; //console.log(x2);
    
    y2=event.clientY;//console.log(y2);

});
function net(){ //console.log(net2.y);
   let i=0;
   while(ty>i){
    c.fillRect(net2.x,i,net2.width,net2.height);
    c.fillStyle="white";
    c.fill();
i=i+60;


   }
  // console.log(net2.y);

}
function collision(p,b){
    p.top=p.y;
    p.bottom=p.y+p.height;
    p.left=p.x;
    p.right=p.x+p.width;
    b.top=b.y-b.radius;
    b.bottom=b.y+b.radius;
    b.left=b.x-b.radius;
    b.right=b.x+b.radius;
    return b.right>p.left&&b.left<p.right&&b.top<p.bottom&&b.bottom>p.top;
    }
    function drewtext( text,x,y,color){
        c.fillStyle=color;
        c.font="75px fantasy";
        c.fillText(text,x,y);
    
    }
    let imagecontainer=document.querySelectorAll(".user-icon");
    function imageset(){
      for(let i=0;i<imagecontainer.length;i++){
        let image=document.createElement("img");
        image.classList.add("image");
        image.src="download.jfif";
       let userlogo= document.querySelector(".fa-user");
       console.log(userlogo);
       userlogo.remove();
          imagecontainer[i].appendChild(image);}
        let userimg=document.querySelector(".user-img-container");
        userimg.style.display="none";

let manucontainer=document.querySelector(".manu-container");
    manucontainer.style.display="block";
    let manu=document.querySelector(".manu");
    manu.style.display="block";
      
    }
    const userimg=document.querySelector("#userimg");
    console.log(userimg);
    userimg.addEventListener("click", ()=>{
        let settingcontainer=document.querySelector(".setting-container2");
    settingcontainer.style.display="none";
        let userimgcontainer=document.querySelector("user-img-container");
    userimgcontainer.style.display="block";

    })
    