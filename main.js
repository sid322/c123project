left_wrist=0;
right_wrist=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function modelloaded(){ 
    console.log('poseNet is initialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    left_wrist=results[0].pose. leftWrist.x;
    right_wrist=results[0].pose.rightWrist.x;
    difference=floor(left_wrist-right_wrist);
}
}
function draw(){
    background("#969897");
    textSize(difference);       
    fill('#FFE787');
    text('Peter',50,400);
}