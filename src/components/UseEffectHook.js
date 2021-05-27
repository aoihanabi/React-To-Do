import React, { useEffect } from "react";

const UseEffectHook = () => {
    //Everytime Occasion: everytime this component gets rendered
    useEffect(function() {
        console.log("Testing useEffect's everytime occasion");
    });

    //First time Occasion: just the first time this component gets rendered
    useEffect(() => {
        console.log("Testing useEffect's first time occasion");
    }, []);

    //First time + Conditionally Occasion: first time this component gets rendered AND each time certain variable gets updated
    useEffect(() => {
        console.log("Testing useEffect's first time occasion");
    }, [conditionalVariable]);

    return (
        <>
            <h1>Test</h1>
        </>
    )
}
export default UseEffectHook;