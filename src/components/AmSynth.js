import React from "react";
import * as Tone from "tone";


const AmSynth =() => {
   

      
var synth = new Tone.AMSynth().toMaster();


const C = () => {
    
   synth.triggerAttackRelease("C4", "4n");
}

const Csharp = () => {
    synth.triggerAttackRelease("C#4", "4n");
}

const D = () => {
    synth.triggerAttackRelease("D4", "4n");
}

const Dsharp = () => {
        synth.triggerAttackRelease("D#4", "4n");
}

const E = () => {
    synth.triggerAttackRelease("E4", "4n");
}

const F = () => {
    synth.triggerAttackRelease("F4", "4n");
}

const Fsharp = () => {
    synth.triggerAttackRelease("F#4", "4n");
}

const G = () => {
    synth.triggerAttackRelease("G4", "4n");
}

const Gsharp = () => {
    synth.triggerAttackRelease("G#4", "4n");
}

const A = () => {
    synth.triggerAttackRelease("A4", "4n");
}

const Asharp = () => {
    synth.triggerAttackRelease("A#4", "4n");
}

const B = () => {
    synth.triggerAttackRelease("B4", "4n");
}






  




    return(
        
      
        
        <div>
           
            <h2 className="SynthName">Amplitude Modulation Synthesis</h2>
            <div className="button-container">
            <button className="flat" onClick={C}>C</button>
            <button className="sharp" onClick={Csharp}>C#</button>
            <button className="flat" onClick={D}>D</button>
            <button className="sharp" onClick={Dsharp}>D#</button>
            <button className="flat" onClick={E}>E</button>
            <button className="flat" onClick={F}>F</button>
            <button className="sharp" onClick={Fsharp}>F#</button>
            <button className="flat" onClick={G}>G</button>
            <button className="sharp" onClick={Gsharp}>G#</button>
            <button className="sharp" className="flat" onClick={A}>A</button>
            <button className="sharp" onClick={Asharp}>A#</button>
            <button className="flat" onClick={B}>B</button>
            </div>
        </div>
    )


}

export default AmSynth;