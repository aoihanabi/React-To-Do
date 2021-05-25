import React from "react";
// Example to use normal javascript functions
// function sayHello () {
//     console.log("Hello from the cute button")
// }

class Button extends React.Component {
    constructor(){
        super();
        this.state = { counter: 0 };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState({counter: 1});
    }

    render() {
        // return <button onClick={sayHello}>{this.props.label}</button>
        return <button onClick={this.handleButtonClick}>{this.state.counter}</button>
    }
}

export default Button;