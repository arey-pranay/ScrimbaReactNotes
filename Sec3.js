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
