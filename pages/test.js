import React from "react";
import { useState } from "react";

export default function test(){

    const [value, setValue] = useState(false);
    return(
        <>
            <h1>{value ? "Clicked" : "Not Clicked"}</h1>
            <button onClick={() => setValue(!value)}>Click</button>
        </>
    )
}