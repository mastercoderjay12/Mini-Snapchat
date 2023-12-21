nose_x=0;
nose_y=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

};

function modelLoaded(){
    console.log("Pose Net is intilized");

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
        nose_x=results[0].pose.nose.x-10;
        nose_y=results[0].pose.nose.y;


    }

}
function draw(){
    image(video,0,0,300,300)
    image(musta,nose_x,nose_y,30,30)
}

function preload(){
    musta=loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');

}
function snap(){
    save("my_picture.png");
}
