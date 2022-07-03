let VideoName = [
    "Corridor 3.mp4",
    "Corridor 4.mp4",
    "Corridor 7.mp4",
    "Corridor 8.mp4",
    "Corridor 9.mp4",
    "Microbuild 3.mp4",
    "Microbuild 1.mp4",
    "Pronouns.mp4",
    "First Day.mp4",
    "Dual Mechanic 2.mp4",
    "Dual Mechanic.mp4",
    "African Puzzle.mp4",
    "Angry balls.mp4",
    "PongMod.mp4",
    "Blender animation 1.mp4",
    "Blender animation 2.mp4"
]

function LoadVideo(ButtonNum)
    {
        var RequestID = ButtonNum.id;
        var VideoNum = parseInt(RequestID.slice(-2));
        var VideoPath = "MyWorkImages/Videos/" + VideoName[VideoNum - 1];
        var NewVideo = document.createElement('video');
        NewVideo.src = VideoPath;
        NewVideo.controls = true;
        //NewVideo.height = 500;
        //NewVideo.width = 1000;
        var InsertID = "InsertedClip";
        if (document.contains(document.getElementById(InsertID)))
        {
            document.getElementById(InsertID).remove();
        }
        NewVideo.setAttribute("id", InsertID);
        var InsertLocation = ButtonNum.parentNode;
        InsertLocation.appendChild(NewVideo);
    }