// window.onload = function () {
   function getId (id) {
      return document.getElementById(id);
   }
   var audio = getId("audio");
   var playpause = getId("play-pause");
   var volume = getId("volume");
   audio.controls = false;
   //歌曲播放暂停
   function togglePlayPause () {
      if(audio.paused || audio.ended) {
         playpause.title = "暂停";
         playpause.innerHTML = "<i class='fa fa-pause fa-3x'></i>"
         audio.play();
      } else {
         playpause.title = "播放";
         playpause.innerHTML = "<i class='fa fa-play fa-3x'></i>"
         audio.pause();   
      }
   }
   //音量
   function setVolume () {
      audio.volume = volume.value;
   }
// };