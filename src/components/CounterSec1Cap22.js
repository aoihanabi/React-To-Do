import React, { useEffect, useState } from "react";

const Seconds = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((counter) => { return counter+1;});
        }, 1000);

        //Implement the componentWillUnmount lifecycle method the Functional Way
        // (For the First time occasion of the useEffect Hook)
        return () => {
            clearInterval(timer)
        }
    }, []);
    return <span>You spent {counter} seconds here</span>
}
export default Seconds;