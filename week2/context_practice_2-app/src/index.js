import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {MovieContextProvider} from "./provider/movieContext";


ReactDOM.render(
    <MovieContextProvider>
        <App />
    </MovieContextProvider>, 
    document.getElementById("root")
);