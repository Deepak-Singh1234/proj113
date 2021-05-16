function preload(){
    loadImage("http://pngimg.com/uploads/picture_frame/picture_frame_PNG209.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
};

function draw(){
fill(45,5,255);
stroke(98,99,100);
rect(104 , 100 , 60 , 60);

}

function take_snapshot(){ save('student_name.png');
 } function filtercolorr()
  { tint_color = document.getElementById("colour222").value;
 }