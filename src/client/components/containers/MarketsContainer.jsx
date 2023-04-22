import React from "react";
import {
    atom,
    useRecoilValue
} from 'recoil';
import AddMarket from "../AddMarket";

// atom is single source of truth for our project
// here, marketListState will hold an array of market objects
const marketListState = atom({
    key: 'MarketList',
    default: []
})

const MarketsContainer = () => {
    const MarketList = useRecoilValue(marketListState);
    return (
        <>
        <div>Markets Container</div>
        <AddMarket />
        </>
    )
}

export default MarketsContainer;