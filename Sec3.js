Doubts:
Different font size units explanation. Why is rem better and how exactly does it work ?
Difference between girds and flexboxes, and how do they work in depth ?
What're hooks ?

use
display: flex 
for navbars or header

use 
margin-right:auto 
to stick stuff to the right

when you use HTML properties in JSX, they're camelCased instead of lowercase. e.g., onclick becomes onCLick.
if you put a {function()} in your code, it'll get executed as soon as that line is read, so instead, pass that function as a value or an object. e/g/, {function}.
  
export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

--States Vs Props

Q. When would you want to use props instead of state?
Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.


Q. When would you want to use state instead of props?
Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component).

--Problem..

When you render an array on the screen, and then put a button to update the array, the array gets updated, but the updated array isn't rendered on the screen.
This is because React doesn't normally care about the local variable changes in your code.
This is why we need states. To kinda update stuff even more dynamically.

--useState()
the React.useState() function returns an array of [ "a value", a function()]

--array destructuring

useState returns ["Yes", f()]

 const [whateverWeWant, func] = React.useState("Yes") 
    console.log(whateverWeWant)

 const result = React.useState("Yes")
    console.log(result[0])

Both these codes return "Yes", it's just that the upper code destructurizes the array into separate variables upon receiving it.

the func that we get in the React.useState output array, is used to change the value from the array

e.g.,
    const [count, setCount] = React.useState(0) //This is the convention for naming the value and the function. since this function here is always used to set the state's value, therefore it's name is mostly `set$[nameOfTheValue]`
    function add(){
        setCount(count+1)
    }
    return (
        <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick = {add} className="counter--plus">+</button>
        </div>
    )
    
    DO NOT USE THIS PLEASE EVER   (count = )
    function add() {
        setCount(count = count + 1)
    }

    AND ALSO THE BEST PRACTICE WHEN YOU WANT TO DO/ACHIEVE SOMETHING LIKE THIS(updating the new value of the state by depending on the previous state's value )
        function add() {
        setCount(prevCount => prevCount + 1)
    }
    
So it means that if you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. 
This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.

When we plan to toggle a value, we should just put it as true or false and then use the update function to take the !ofTheValue.

Suppose you have to change the star property of your card from glowing to not glowing, then you'll need to update your card's state with the entire card as it is plus the new change, i.e., the glowing star. 
So you can do something like
function toggleFav(){
  setContactCard(prevState => {
 return{...prevState, glow:false}
}   
                 }
This ... is called the spread operator
                 
                 
               
--.push() shouldn't be used to modify the state directly           
 const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
      
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        }                ---YES
        
       thingsArray.push() --NO
    }
 
--Toggling onClick

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
             )
             
             
             
the onClick function can only applied to HTML elements. So if you want to use it on your own component, then you can create another custom-made function called handleClick 

----App.js

import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
  
return(
<Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
)

----Star.js
export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}
             
 Whenever the state of a parent component is changed, the 'child components that receive that state as props', get rendered again.. (re-rendered);
 
--Styling Dynamically using React.js.......

import React from "react"
import boxes from "./boxes"
export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
