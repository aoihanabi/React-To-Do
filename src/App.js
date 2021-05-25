import React from "react";

function sayHello () {
    console.log("Hello from the cute button")
}

//React function component example
const Header = function(){
    return <h1>Click the button!</h1>
}

class Button extends React.Component {
    render() {
        return <button onClick={sayHello}>Click me...</button>
    }
}

//React Class component example
class App extends React.Component //the inheritance is what makes it a react class by making available react methods to it.
{
    //this is a React method.
    render() {
        return (
        <>  
            <Header />
            <Button />
        </>);
    }
}
export default App;