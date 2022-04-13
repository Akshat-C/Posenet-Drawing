noseX = 0;
noseY = 0;
lwristX = 0;
rwristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(650, 500);
    canvas = createCanvas(650, 500);
    canvas.position(800, 180);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been loaded succesfully");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x + y values: x- "+noseX+" y- "+noseY);
        lwristX = results[0].pose.leftWrist.x;
        rwristX = results[0].pose.rightWrist.x;
        console.log("Wrist values: leftwrist- "+lwristX+" rightwrist- "+rwristX);
        difference = floor(lwristX - rwristX);
        console.log(difference);
    }
}

function draw()
{
    background("blue")
    document.getElementById("sq_width").innerHTML = difference + " px";
    fill("red");
    stroke("green")
    square(noseX, noseY, difference);
}