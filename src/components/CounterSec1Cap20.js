import React, { useState } from "react";

const ClicksCounterFunctional = () => {
    const [clicks, setClicks] = useState(0);

    function handleButtonClick() {
        setClicks(clicks+1);
    }
    return (
        <>
            <span>You clicked {clicks} clicks</span>
            <br />
            <button onClick={handleButtonClick}>Click me</button>
        </>
    );
};

export default ClicksCounterFunctional;