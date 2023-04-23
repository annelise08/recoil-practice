import React from "react";
import { atom, useRecoilValue } from "recoil";
import AddMarket from "../AddMarket";
import { marketListState } from "../atoms";
import Market from "../Market";

const MarketsContainer = () => {
  // this will store a list of all of our markets
  const MarketList = useRecoilValue(marketListState);

  return (
    <>
      <div>Markets Container</div>
      <AddMarket />
      {MarketList.map((market) => (
        <Market location = {market.location}/>
      ))}
    </>
  );
};

export default MarketsContainer;
