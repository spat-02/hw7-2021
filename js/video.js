var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to", video.autoplay)
	console.log("Loop is set to", video.loop)
});



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Speed up video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;
	  }
	console.log("Skip ahead");
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(document.querySelector('#mute').innerHTML == "Mute") {
		document.querySelector('#mute').innerHTML = "Unmute"
		console.log("Mute");
	} else {
		document.querySelector('#mute').innerHTML = "Mute"
		console.log("Unmute");
	}
	video.muted = !video.muted;
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is", video.volume);
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	console.log("The current value is", video.volume);
	console.log(document.querySelector("#volume"))
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});