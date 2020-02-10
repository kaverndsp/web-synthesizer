import * as Tone from "tone";

export const synth = new Tone.DuoSynth().toMaster();


export const C = () => {
    synth.triggerAttackRelease("C4", "4n");
}

export const Csharp = () => {
    synth.triggerAttackRelease("C#4", "4n");
}

export const D = () => {
    synth.triggerAttackRelease("D4", "4n");
}

export const Dsharp = () => {
        synth.triggerAttackRelease("D#4", "4n");
}

export const E = () => {
    synth.triggerAttackRelease("E4", "4n");
}

export const F = () => {
    synth.triggerAttackRelease("F4", "4n");
}

export const Fsharp = () => {
    synth.triggerAttackRelease("F#4", "4n");
}

export const G = () => {
    synth.triggerAttackRelease("G4", "4n");
}

export const Gsharp = () => {
    synth.triggerAttackRelease("G#4", "4n");
}

export const A = () => {
    synth.triggerAttackRelease("A4", "4n");
}

export const Asharp = () => {
    synth.triggerAttackRelease("A#4", "4n");
}

export const B = () => {
    synth.triggerAttackRelease("B4", "4n");
}