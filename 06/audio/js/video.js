//获取video对象
var myVideo = document.getElementById("myVideo");
//播放/暂停
function playPause () {
	var ppbtn = document.getElementById("playPause");
	if(myVideo.paused) {
		myVideo.play();
		ppbtn.innerHTML = "暂停";
	} else {
		myVideo.pause();
		ppbtn.innerHTML = "播放";
	}
}
//控制快进快退的方法
function goBack (val) {
	myVideo.currentTime += val;
}
//控制音量
function volume (val) {
	myVideo.volume += val;
}
//是否静音
function isMuted () {
	var imbtn = document.getElementById("isMuted");
	if(myVideo.muted) {
		myVideo.muted = false;
		imbtn.innerHTML = "静音";
	} else {
		myVideo.muted = true;
		imbtn.innerHTML = "声音";
	}
}