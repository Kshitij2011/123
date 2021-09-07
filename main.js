noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    //above thing will turn on the webcam
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    //will create canvas above one
    canvas.position(560, 150);
    //canvas.position(560, 150); = 560, 150 is margin left and margin top 560-margin left 150-margin top

    poseNet = ml5.poseNet(video, modelLoaded);
    //above will link to posenet
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Started!');
}


function gotPoses(results){
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX = " + noseX +"noseY = " + noseY);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference =floor(leftWristX - rightWristX);

       console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
   }   
}

function draw(){
    background('#00b300');

    document.getElementById("square_sides").innerHTML = "Width And Height of a Square will be =" + difference + "px";

    fill('gray');
    stroke('black');
    square(noseX,noseY,difference);
}