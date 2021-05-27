import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {value: "This is parent's element state value"}
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        alert(this.state.value);
    }
 
    handleInputChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return(
            <form onSubmit={ this.handleFormSubmit }>
                <input id="name" type="text" value={this.state.value} onChange={this.handleInputChange}></input>
                <input id="" type="submit"></input>
            </form>
        );
    }
}

export default Form;