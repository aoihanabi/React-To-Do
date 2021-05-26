import React from "react";

class Form extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
        let input_value = document.querySelector("#name").value;
        alert(input_value);
    }

    render() {
        return(
            <form onSubmit={ this.handleFormSubmit }>
                <input id="name" type="text"></input>
                <input id="" type="submit"></input>
            </form>
        );
    }
}

export default Form;