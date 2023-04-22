import React from "react";
import { useState } from "react";
import {
    atom,
    useRecoilValue
} from 'recoil';
import { marketListState } from "./atoms";

// want add market to update state for all markets based on input
const AddMarket = () => {
    // should return a form with an input label
    // on change, form should update the markets container state
    const [market, setMarket] = useState('');

    const MarketList = useRecoilValue(marketListState);
    // new market will be an object with a name and id
    // id will be length of market state list

    const newMarket = {
        location: market,
        id: MarketList.length
    }

    // function to update state based on input field
    const onChange = (e) => {
        setMarket(e.target.value);
    }

    const handleClick = (e) => {
        console.log(MarketList.length)
    }

    return (
        <div>
            <input type="text" value={market} onChange={onChange}/>
            <button onClick={handleClick}>Add market</button>
        </div>
    )
}

export default AddMarket;