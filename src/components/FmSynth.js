import React from "react";
import * as Tone from "tone";

const FmSynth = () =>{

    var synth = new Tone.FMSynth().toMaster();

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
                <h2 className="SynthName">Frequency Modulation Synthesis</h2>
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

export default FmSynth;