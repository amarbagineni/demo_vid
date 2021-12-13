console.log("This is some message yyyy")

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

function startupload() {
    console.log("Start the video uploda here");
    showMessage("upload-error", "Someerror from func")
}