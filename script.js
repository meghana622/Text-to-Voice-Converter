let speech=new SpeechSynthesisUtterance()
let voices=[]
let voiceSelect=document.querySelector("select")

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice=voices[0]
    //to dispaly speech voices on dropdown
    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)))

}

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})

document.querySelector("button").addEventListener('click',()=>{
    speech.text=document.getElementById("text").value
    if(!speech.text){
        alert("Please enter text")
    }
    window.speechSynthesis.speak(speech)
})

console.log(window.speechSynthesis)
console.log(window.speechSynthesis.speak)