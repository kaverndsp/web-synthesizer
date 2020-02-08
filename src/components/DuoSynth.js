import React from "react";
import * as Tone from "tone";


const DuoSynth = () => {

    var synth = new Tone.DuoSynth().toMaster();

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
                <h2>Dual Synth</h2>
                <button onClickCapture={C}>C</button>
                <button onClickCapture={Csharp}>C#</button>
                <button onClickCapture={D}>D</button>
                <button onClickCapture={Dsharp}>D#</button>
                <button onClickCapture={E}>E</button>
                <button onClickCapture={F}>F</button>
                <button onClickCapture={Fsharp}>F#</button>
                <button onClickCapture={G}>G</button>
                <button onClickCapture={Gsharp}>G#</button>
                <button onClickCapture={A}>A</button>
                <button onClickCapture={Asharp}>A#</button>
                <button onClickCapture={B}>B</button>
            </div>
        )
    


}

export default DuoSynth;