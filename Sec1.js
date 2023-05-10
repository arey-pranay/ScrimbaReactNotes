--Always

import React from "react"
import ReactDOM from "react-dom"

--Components

//PascalCase functions
function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))
//ReactDOM.render(what,where)
//Call functions like they are HTML elements i.e., </> instead of ()

.nav-items > li {
    padding: 10px;
} //to select all the list items in the element having nav-items className

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
//Put multiple components in one component and then render that component to the root ID normally.

--import/exports..

//Footer.js

import React from "react"

export default function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

//index.js

import React from "react"
import ReactDOM from "react-dom"
import Footer from "./Footer"

ReactDOM.render(<Footer/>, document.getElementById("root"))

--to setup locally

npm create vite@latest
cd [project-name]
npm install
npm run dev

--you need to import every resource you use
e.g.

to use <img src = "./my-logo.png">

you need to 
import x from ""./my-logo.png""
and then <img src = {x}>






