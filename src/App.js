import React from "react";
import Header from "components/Header";
import Header from "components/Button";

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
            <Header />
            <Button />
        </>);
    }
}
export default App;