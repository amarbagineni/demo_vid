console.log("This is some message yyyy");

function showMessage(id, message) {
  var errorMsg = document.getElementById(id);
  errorMsg.innerHTML = message;
  errorMsg.style.display = "block";
}

function hideMessage(id, message) {
  var errorMsg = document.getElementById(id);
  errorMsg.innerHTML = message;
  errorMsg.style.display = "none";
}

async function startupload() {
  console.log("Start the video uploda here");
  let video = document.getElementById("videoSourceFile").files[0];
  let videoTitle = document.getElementById("videoTitle").value;

  let formData = new FormData();

  formData.append("videoFile", video);
  formData.append("title", videoTitle);

  try {
    await fetch('http://35.200.187.58:3000/api/' + "videohotspot/upload", {
      method: "POST",
      body: formData,
    });

    showMessage("upload-error", "File uploaded successfully!");
  } catch (err) {
    console.log(err);
    showMessage("upload-error", "Something went wrong!");
  }
}
