// explore.js
const synth = window.speechSynthesis;
let voices = [];
window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectedOption;  
  const selectVoice = document.getElementById("voice-select");
  const pressTalk = document.querySelector('button');
  const textInput = document.getElementById("text-to-speak");
  synth.addEventListener("voiceschanged", () => {populateVoiceList(voices)});
  selectVoice.addEventListener("change", (e) => {selectedOption = e.target.options[event.target.selectedIndex]});
  pressTalk.addEventListener("click", () => {
    talk(selectedOption.dataset.name, textInput.value);
  })
}

function populateVoiceList(voices) {
  const selectVoice = document.getElementById("voice-select");
  voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
    option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    selectVoice.appendChild(option);
  }
}

function talk(inputVoice, text){
  const face = document.querySelector('img[alt="Smiling face"]');
  const utterThis = new SpeechSynthesisUtterance(text);
  const selectedOption = inputVoice;
  const test = synth.getVoices();
  for (const voice of test) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }

  utterThis.onstart = () => {
    face.src = "assets/images/smiling-open.png";
  }
  utterThis.onend = () => {
    face.src = "assets/images/smiling.png";
  }
  synth.speak(utterThis);
}