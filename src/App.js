import React, { Component } from "react";

import SeriesTable from "./SeriesTable";
import SeriesDetail from "./SeriesDetail";
import Graphic from "./Graphic";

class App extends Component {
    
    state = {};
    
    render() {
        return (
        <div>
            <h1>T.V. Series</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <SeriesTable className="d-flex" onUpdateSeries={(newSeries) => this.setState(newSeries)}/>
                <SeriesDetail currentSeries={this.state}/>
            </div>
            <Graphic/>
        </div>
    )}
}

export default App;