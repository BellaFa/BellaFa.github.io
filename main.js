
console.log("Main.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let image = document.getElementById("right");


let x =0;
let y =130;
let vxl =0;
let vxr =0;
let vy = 0;
let left = false;
let right = true;

function update(){
    ctx.clearRect(0,0, canvas.width,canvas.height)
    x+= vxl;
    x += vxr;
    y+= vy;
    if(x< 0) x= 0;
    if(x > 1300) x= 1300;

    if(left == true) image = document.getElementById("left");

    if(right == true) image = document.getElementById("right");

   
    ctx.drawImage(image,x,y,256,256);

    requestAnimationFrame(update)
}
update();

function ScrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
}
