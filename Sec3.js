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
    const [count, setCount] = React.useState(0)
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
    
