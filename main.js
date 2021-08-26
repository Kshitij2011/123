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
   }
}

function draw(){
    background('#cc0000');
}
