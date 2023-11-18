console.log("hello world");
let x =345;
let y=250;
let s=100;
let uppres=false;
let downpres=false;
let leftpres=false;
let rightpres=false;
let p=5;
window.onload=function() {
    const canvas = document.getElementById("gameArea");
    const ctx = canvas.getContext("2d");
    function drawgame() { 
        clearSC();
        inputs();
        drawp1();
        boundaries();
        showctrls();
    }
    function drawp1() {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.rect(x,y,s,s);
        ctx.fill();
        ctx.stroke();
    }

    function clearSC() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    }

    function inputs() {
        if(uppres) {
            y=y-5;}
        if(downpres) {
            y=y+5;}
        if(leftpres) {
            x=x-5;}
        if(rightpres) {
            x=x+5;}
    }

    document.body.addEventListener("keydown",keyDown);
    document.body.addEventListener("keyup",keyUp);
    document.body.addEventListener("keyleft",keyLeft);
    document.body.addEventListener("keyright",keyRight);

    function keyDown(event) {
        if(event.keyCode==83) {
            downpres=true;
        }
        if(event.keyCode==87) {
            uppres=true;
        }
        if(event.keyCode==65) {
            leftpres=true;
        }if(event.keyCode==68) {
            rightpres=true;
        }
    }
    function keyUp(event) {
        if(event.keyCode==87) {
            uppres=false;
        }
        if(event.keyCode==68) {
            rightpres=false;
        }
        if(event.keyCode==65) {
            leftpres=false;}
        if(event.keyCode==83) {
            downpres=false;
        }
    }
    function keyLeft(event) {
        if(event.keyCode==65) {
            leftpres=true;}
        if(event.keyCode==68) {
            rightpres=true;}
        if(event.keyCode==87) {
            uppres=true;}
        if(event.keyCode==83) {
            downpres=true;}
    }
    function keyRight(event) {
        if(event.keyCode==68) {
            rightpres=true;}
        if(event.keyCode==65) {
            leftpres=true;}
        if(event.keyCode==87) {
            uppres=true;}
        if(event.keyCode==83) {
            downpres=true;
        }
    }

    function boundaries() {
        if(y<canvas.height-canvas.height) {
            y=canvas.height-canvas.height;}
        if(y>canvas.height-s) {
            y=canvas.height-s;}
        if(x<canvas.width-canvas.width) {
            x=canvas.width-canvas.width;}
        if(x>canvas.width-s) {
            x=canvas.width-s;}
    }

    function showctrls() {
        p-=0.1;
        if(p>=0) {
            document.getElementById("controls").innerHTML="wasd keys";}
        if(p<0) {
            document.getElementById("controls").innerHTML="";
        }
    }



    setInterval(drawgame,1000/60);
}

