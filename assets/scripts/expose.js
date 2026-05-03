// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById("horn-select");
  const soundPress = document.querySelector('button')
  const volume = document.getElementById("volume")
  horn.addEventListener("change", hornSelect);
  soundPress.addEventListener("click", playSound);
  volume.addEventListener("input", volumeSlider)

}

function hornSelect(e){
  const audio = document.getElementsByClassName("hidden")[0]
  if(e.target.value == "air-horn"){
    imageSelect("air-horn");
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if(e.target.value == "car-horn"){
    imageSelect("car-horn");
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if(e.target.value == "party-horn"){
    imageSelect("party-horn");
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function imageSelect(hornType){
  const image = document.querySelector('img[alt="No image selected"]');
  if(hornType == "air-horn"){
    image.src = "assets/images/air-horn.svg";
  }
  else if(hornType == "car-horn"){
    image.src = "assets/images/car-horn.svg";
  }
  else if(hornType == "party-horn"){
    image.src = "assets/images/party-horn.svg";
  }
}

function playSound(){
  const audio = document.getElementsByClassName("hidden")[0];
  const image = document.querySelector('img[alt="No image selected"]');
  if(image.src.includes("assets/images/party-horn.svg")){
    audio.play();
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  else{
    audio.play();
  }
}

function volumeSlider(e){
  const image = document.querySelector('img[alt="Volume level 2"]');
  const audio = document.getElementsByClassName("hidden")[0];
  if(e.target.value == 0){
    image.src="assets/icons/volume-level-0.svg"
  }
  else if(e.target.value < 33){
    image.src="assets/icons/volume-level-1.svg"
  }
  else if(e.target.value < 67){
    image.src="assets/icons/volume-level-2.svg"
  }
  else if(e.target.value <= 100){
    image.src="assets/icons/volume-level-3.svg"
  }
  audio.volume = (e.target.value / 100)
}