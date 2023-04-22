import React from "react";
import { useState } from "react";

// want add market to update state for all markets based on input
const AddMarket = () => {
    // should return a form with an input label
    // on change, form should update the markets container state
    const [market, setMarket] = useState('');

    // function to update state based on input field
    const onChange = (e) => {
        setMarket(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <input type="text" value={market} onChange={onChange}/>
        </div>
    )
}

export default AddMarket;