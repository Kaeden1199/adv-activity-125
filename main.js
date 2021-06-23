noseX= 0;
noseY= 0;
difference= 0;
left_wristX= 0;
right_wristX= 0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550, 500);
    canvas= createCan
    vas(550, 550);
    canvas.position(560, 150);
    postNet= ml5.postNet(video, modelLoaded);
    postNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('postNet is initizalized');


}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results [0].pose.nose.y;
        console.log("noseX= " + noseX + " noseY= " + noseY);
        left_wristX= results[0].pose.leftWrist.x;
        right_wristX= results[0].pose.rightWrist.x;
        difference= left_wristX-right_wristX;
        console.log("left_wristX= " + left_wristX + "right_wristX= " + right_wristX + "difference= " + difference);



        

    }
}

function draw(){
    background('#7a95bf');
    document.getElementById("square_sides").innerHTML= "width and height of the square will be= " + difference + "px";
    
    fill('#7a95bf');
    stroke('#7a95bf');
    square(noseX, noseY, difference);




}
