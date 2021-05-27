import React from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";

// import Counter from "./components/CounterSec1Cap16";

// import Form from "./components/Form";

// import ClicksCounterFunctional from "./components/CounterSec1Cap20";
// import UseEffectHook from "./components/UseEffectHook";
import Seconds from "./components/CounterSec1Cap22";

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

            {/* <Form /> */}

            {/* <CounterFunctional /> */}
            {/* <UseEffectHook /> */}
            <Seconds />
        </>);
    }
}
export default App;