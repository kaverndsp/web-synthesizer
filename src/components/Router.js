import React from "react";
import {Route, Link} from "react-router-dom";
import AmSynth from "./AmSynth";
import Home from "./Home";
import DuoSynth from "./DuoSynth";

const Router =() => {

return(
<div>
<h1>Web Synthesizer</h1>

<Route path="/">
    <Home/>
</Route>

<Link to="/">Home</Link>
<Link to="/AmSynth">AM Synth</Link>
<Link to="/DuoSynth">Duo Synth</Link>
<Link to="/FmSynth"></Link>



<Route path="/AmSynth" component={AmSynth}/>
<Route path="/DuoSynth" component={DuoSynth}/>
    


</div>
)


}

export default Router;

