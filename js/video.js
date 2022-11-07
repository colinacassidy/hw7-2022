var video;
var speed;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video")

	video.autoplay = false; 
	video.loop = false;
	speed = 1
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = "100%"
	video.play()
});		

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause")
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	speed *= 0.9
	video.playbackRate = speed
	console.log(speed)
})

document.querySelector("#faster").addEventListener("click", function() {

	speed /= 0.9

	video.playbackRate = speed
	console.log(speed)
});

document.querySelector("#skip").addEventListener("click", function() {
	
	if(video.currentTime + 10  > video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime += 10
	}

	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else{
		video.muted = true 
		document.querySelector("#mute").innerHTML = "Unmute"
	}

})

document.querySelector("#slider").addEventListener("change", function() {
	slider = document.querySelector("#slider")
	video.volume = slider.value / 100
	document.querySelector("#volume").innerHTML = `${slider.value}%`
})

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").className += " oldSchool"
})

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector(".video").className = "video"
})