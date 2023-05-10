My doubts: 
Section vs Nav vs Div vs Container
What's special about the header and footer tags
Why do we keep parent relative and child absolute
How do different units of CSS work ??
Why to put hero--header etc. (double dash in classNames)?
  
  
--Using Javascript inside JSX syntax by the helo if {} curly braces
function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    return (
        <h1>Hello {firstName} {lastName}!</h1>
    )
}

Har file me React to import krna hi hai, aur jo function-based component hai wo export krna hi hai. Baaki imports requirements ke hisaab se rahege
Ek components naam ka folder hai, usme saare components ke naam ke files bnaake usme se wo components export krne hai default se
Fir un sb ko App.js me import krna hai aur ek <div> .... </div> ke andar close krna hai ya ek function App(){ return( <> .... </>) } ke andar. Aur fir export App
Finally index.js me App ko import krke <App/> ko render krna hai 
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(<App />, document.getElementById("root"))


