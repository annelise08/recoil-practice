import React from "react";
import { marketListState } from './Atoms'
import { useRecoilState } from "recoil";

// for now, each market will have a location
const Market = (props) => {
    // get market list and setter function from recoil market list state
    const [marketList, setMarketList] = useRecoilState(marketListState);

    // function to handle deleting individual market
    const handleClick = (id) => {
        setMarketList((oldMarketList) => {
            const newMarketList = oldMarketList.slice();
            // iterate through each market in market list
            for (let i = 0; i < newMarketList.length; i++){
                // if market id matches, remove from list and return new market list
                if (newMarketList[i].id === id){
                    return newMarketList.slice(0, i).concat(newMarketList.slice(i + 1));
                }
            }
        })
        
    }

    return (
        <>
        <div className="market">
            <div>Location: {props.location}</div>
            <div>ID: {props.id}</div>
            <button onClick={() => handleClick(props.id)}>Delete market</button>
        </div>
        </>
    )
}

export default Market;