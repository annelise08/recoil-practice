import React from "react";

// for now, each market will have a location
const Market = (props) => {
    return (
        <>
        <div className="market">
            <div>Location: {props.location}</div>
            <div>ID: {props.id}</div>
        </div>
        </>
    )
}

export default Market;