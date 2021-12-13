// All the functions to load the video file

(function() {
    console.log("this is the auto ");

    // Load the video from the GCS 
    var videoContainer = document.getElementById("loadvideo-sidebar");

    // form the content link here : Shubham
    var loadVideoContent = '<div class="video-item"> \
                <a href="javascript:loadVideo1(id)">Video 1</a> \
            </div>';
    var videoLink = document.createElement(loadVideoContent)

    videoContainer.appendChild(videoLink);

})();

// load video to the player : with inital phase as paused | Shubham
function loadVideo1(id) {
    console.log("this is the place to load the video file", id);
}