canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d"); 
var mouseEvent="empty";
color="red"; 
canvas.addEventListener("mousedown",mouse_down); 
function mouse_down(e){ 
    mouseEvent="mousedown"; 
} 
canvas.addEventListener("mousemove",mouse_move); 
function mouse_move(e){ 
    current_position_of_x=e.clientX-canvas.offsetLeft; 
    current_position_of_y=e.clientY-canvas.offsetTop; 
    if(mouseEvent=="mousedown"){ ctx.beginPath(); 
        ctx.strokeStyle=color;
        ctx.lineWidth=2; 
        ctx.arc(current_position_of_x, current_position_of_y, 50,0, 360);
        ctx.stroke(); 
}
}