import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="App">
            <h1>Hello Chrome 40!</h1>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));