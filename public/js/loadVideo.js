// All the functions to load the video file
(function() {
    console.log("this is the auto ");
    // [TO DO] Need to call an api for this
    loadVideo1({ id: 26, video_src_url: 'https://storage.googleapis.com/interactive-video-src/video.mp4' })
})();

// load video to the player : with inital phase as paused | Shubham
function loadVideo1(video) {
    videoData = typeof video === 'string' ? JSON.parse(video) : video;

    // Load the video from the GCS 
    const videoContainer = document.getElementById("video-player");

    // form the content link here : Shubham
    videoContainer.innerHTML = `<video style="object-fit: cover;" id="preview-video" controls muted>
        <source id="mp4" src="${videoData.video_src_url}" type="video/mp4" />
        <p>HTML5 Video is not supported by this browser.</p>
    </video>`;
}