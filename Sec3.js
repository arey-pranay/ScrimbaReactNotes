Doubts:
Different font size units expkanation. Why is rem better and how exactly does it work ?
Difference between girds and flexboxes, and how do they work in depth ?

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
