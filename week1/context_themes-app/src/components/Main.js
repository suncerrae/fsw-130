import React from "react";
import {ThemeContextConsumer} from "../themeContext";

function Main(props) {
    
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-background`}>
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}> Click for {context.theme === "light" ? "Dark" : "Light"} Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )    
}

export default Main;