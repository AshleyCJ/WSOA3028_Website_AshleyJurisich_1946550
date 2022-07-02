let VideoName = [
    "Corridor 3.mp4",
    "Corridor 4.mp4",
    "Corridor 7.mp4",
    "Corridor 8.mp4",
    "Corridor 9.mp4"
]

function LoadVideo(ButtonNum)
    {
        var RequestID = ButtonNum.id;
        var VideoNum = parseInt(RequestID.slice(-2));
        var InsertID = "InsertClip";
        if (VideoNum < 10)
        {
            InsertID += "0" + VideoNum;
        }
        else
        {
            InsertID += VideoNum;
        }
        var VideoPath = "MyWorkImages/Videos/" + VideoName[VideoNum - 1];


        alert(VideoPath);



        var NewVideo = document.createElement('video');
        NewVideo.src = VideoPath;
        NewVideo.controls = true;
        NewVideo.height = 500;
        NewVideo.width = 1000;

        var InsertLocation = document.getElementById(InsertID);
        InsertLocation.appendChild(NewVideo);
    }


/*
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
*/