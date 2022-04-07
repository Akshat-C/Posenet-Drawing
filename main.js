function preload()
{}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.position(50, 200);
    pose_model = ml5.poseNet(video, modelLoaded);
    pose_model.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been loaded succesfully");
}

function draw()
{}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}