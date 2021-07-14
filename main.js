var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    curent_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    curent_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("curent position of x and y coordinates = "); 
        console.log("x = " + curent_position_of_mouse_x + "y = " + curent_position_of_mouse_y);
        ctx.lineTo(curent_position_of_mouse_x, curent_position_of_mouse_y);
    }
    last_position_of_x=curent_position_of_mouse_x;
    last_position_of_y=curent_position_of_mouse_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}