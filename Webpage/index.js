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

let WarningIndex = [
    0, 1, 2
]

function VideoReq(ButtonNum)
    {
        var RequestID = ButtonNum.id;
        var VideoNum = parseInt(RequestID.slice(-2));
        var CheckProceed = false;
        for (let i = 0; i < WarningIndex.length; i++)
        {
            if (VideoNum == WarningIndex[i])
            {
                CheckProceed = true;
            }
        }
        if (CheckProceed)
        {
            WarnUser(ButtonNum, VideoNum);
        }
        else
        {
            LoadVideo(ButtonNum, VideoNum);
        }
    }

function WarnUser(ButtonNum, VideoNum)
    {
        var Accept = window.confirm("Warning! Flashing/flickering lights are shown in this clip. Are you sure you wish to proceed?");
        if (Accept) {
            LoadVideo(ButtonNum, VideoNum);
        }
        else 
        {
            return;
        }
    }

function LoadVideo(ButtonNum, VideoNum)
    {
        var VideoPath = "MyWorkImages/Videos/" + VideoName[VideoNum - 1];
        var NewVideo = document.createElement('video');
        NewVideo.src = VideoPath;
        NewVideo.controls = true;
        var InsertID = "InsertedClip";
        if (document.contains(document.getElementById(InsertID)))
        {
            document.getElementById(InsertID).remove();
        }
        NewVideo.setAttribute("id", InsertID);
        var InsertLocation = ButtonNum.parentNode;
        InsertLocation.appendChild(NewVideo);
    }