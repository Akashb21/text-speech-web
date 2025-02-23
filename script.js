let speech = new SpeechSynthesisUtterance();
let btn = document.getElementById("btn");


let voices =[];

let voiceSelect = document.getElementById("voices");

function updateVoices(){
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)
)
);
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
}
if (voices.length === 0) {
    updateVoices();
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
