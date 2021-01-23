#npx create-react-app my-app
#cd my-app
#npm start


Context.Consumer:

**index.js**

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import ThemeContext from "./themeContext"

ReactDOM.render(
    <ThemeContext.Provider value={"dark"}>
        <App />
    </ThemeContext.Provider>, 
    document.getElementById("root")
)


**App.js**

import React from "react"

import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} />
                )}
            </ThemeContext.Consumer>
            
            <Button theme="monkey"/>
        </div>
    )
}

export default App


**ThemeContext.js**

import React from "react"
const ThemeContext = React.createContext()
export default ThemeContext


**Button.js**

import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )    
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}

export default Button



**Header.js**

import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Header(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Header










Context Practice 1:

#Showing value of user name

**index.js**


import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import UserContext from "./userContext"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

ReactDOM.render(
    <UserContext.Provider value={"sally123"}>
        <App />
    </UserContext.Provider>, 
    document.getElementById("root")
)


**App.js**


import React from "react"

import Header from "./Header"
import UserContext from "./userContext"

class App extends React.Component {
    static contextType = UserContext
    
    render() {
        const username = this.context
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {username}! 🎉</p>
                </main>
            </div>
        )
    }
}

export default App


**userContext.js**

import React from "react"

const UserContext = React.createContext()
export default UserContext


**Header.js**

import React, {Component} from "react"
import UserContext from "./userContext"

class Header extends Component {
    static contextType = UserContext
    
    render() {
        const username = this.context
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )    
    }
}

export default Header


**styles.css**

body {
    margin: 0;
    padding: 0;
}

header {
    padding: 20px;
}

button {
    padding: 10px;
    border: none;
    margin: 10px;
}

.dark-theme {
    background-color: #333333;
    color: whitesmoke;
}

.light-theme {
    background-color: whitesmoke;
    color: #333333;
}