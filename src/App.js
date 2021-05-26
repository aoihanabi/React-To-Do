import React from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";

// import Counter from "./components/Counter";

import Form from "./components/Form";

//React function component example
// const App = () => {
//     return <h1>Hi React World</h1>;
// }

//React Class component example
class App extends React.Component //the inheritance is what makes it a react class by making available react methods to it.
{
    //this is a React method.
    render() {
        return (
        <>  
            {/* <Header text="Prop Text Here" /> */}
            {/* <Button label="Hey button" /> */}
            {/* <Counter /> */}

            <Form />
        </>);
    }
}
export default App;