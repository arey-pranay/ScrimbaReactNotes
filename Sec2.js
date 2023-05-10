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


--Propsssssssss

----Contact.js

import React from "react"
export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

----App.js

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
      )
}

--Alt

instead of passing function Contact(props){<h1>props.name</h1> <p>props.date</p>}
we can also directly pass the js objects function Contact({name,date}){<h1>name</h1> <p>date</p>}
----Conditional Rendering

return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
    

It implies that if props.setup is true, then execute the line. Because for an && statement to be true, both parts need to individually be true.
So only if props.setup exists, we will execute the second part, i.e..... displaying that in an h3 element

--Other datatypes except string.. as propss
return (
        <div>
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
         </div>
)

<img src={`../images/${props.img}`}>
jsx to js by using {}. then use backtick notation of writing strings. we use ${js objectname} in this notation.

--Converting an array of strings to html elements.
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]


