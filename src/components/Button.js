import React from "react";

function sayHello () {
    console.log("Hello from the cute button")
}

class Button extends React.Component {
    render() {
        return <button onClick={sayHello}>Click me...</button>
    }
}

export default Button;