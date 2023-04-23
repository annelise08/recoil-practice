import React from "react";

// for now, each market will have a location
const Market = (props) => {
    return (
        <>
        <div className="market">Location: {props.location}</div>
        </>
    )
}

export default Market;