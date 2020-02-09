import React from "react";
import {Route, Link} from "react-router-dom";
import AmSynth from "./AmSynth";
import Home from "./Home";
import DuoSynth from "./DuoSynth";
import FmSynth from "./FmSynth";
import "./styles.css";
const Router =() => {

return(
<div>
<h1>Web Synthesizer</h1>

<Route path="/">
    <Home/>
</Route>
<div className="HeadLinks">
<Link to="/">Home</Link>
<Link to="/AmSynth">AM Synth</Link>
<Link to="/DuoSynth">Duo Synth</Link>
<Link to="/FmSynth">FmSynth</Link>
</div>


<Route path="/AmSynth" component={AmSynth}/>
<Route path="/DuoSynth" component={DuoSynth}/>
<Route path="/FmSynth" component={FmSynth}/>

<div>
    <h3 className="intro">Created with React and <a href="https://github.com/Tonejs/Tone.js">Tone.js</a></h3>
    <h4> <a  className="github" href="https://github.com/kaverndsp/web-synthesizer">KavernDSP</a></h4>
</div>
    


</div>
)


}

export default Router;

