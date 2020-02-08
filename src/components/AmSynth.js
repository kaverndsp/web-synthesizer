import React from "react";
import * as Tone from "tone";


const AmSynth =(event) => {
   

      
var synth = new Tone.AMSynth().toMaster();


const C = () => {
    
   synth.triggerAttackRelease("C4", "8n");
}

const Csharp = () => {
    synth.triggerAttackRelease("C#4", "8n");
}

const D = () => {
    synth.triggerAttackRelease("D4", "8n");
}

const Dsharp = () => {
        synth.triggerAttackRelease("D#4", "8n");
}

const E = () => {
    synth.triggerAttackRelease("E4", "8n");
}

const F = () => {
    synth.triggerAttackRelease("F4", "8n");
}

const Fsharp = () => {
    synth.triggerAttackRelease("F#4", "8n");
}

const G = () => {
    synth.triggerAttackRelease("G4", "8n");
}

const Gsharp = () => {
    synth.triggerAttackRelease("G#4", "8n");
}

const A = () => {
    synth.triggerAttackRelease("A4", "8n");
}

const Asharp = () => {
    synth.triggerAttackRelease("A#4", "8n");
}

const B = () => {
    synth.triggerAttackRelease("B4", "8n");
}






  




    return(
        
      
        
        <div>
           
            <h2>Amplitude Modulation Synthesis</h2>
            <button onClick={C}>C</button>
            <button onClick={Csharp}>C#</button>
            <button onClick={D}>D</button>
            <button onClick={Dsharp}>D#</button>
            <button onClick={E}>E</button>
            <button onClick={F}>F</button>
            <button onClick={Fsharp}>F#</button>
            <button onClick={G}>G</button>
            <button onClick={Gsharp}>G#</button>
            <button onClick={A}>A</button>
            <button onClick={Asharp}>A#</button>
            <button onClick={B}>B</button>
        </div>
    )


}

export default AmSynth;