import React from "react";
import { atom, useRecoilValue } from "recoil";
import AddMarket from "../AddMarket";
import { marketListState } from "../Atoms";
import Market from "../Market";
import { filteredMarketListState } from "../Selectors";
import FilterMarkets from "../FilterMarkets";

const MarketsContainer = () => {
  // this will store a list of all of our markets
  const MarketList = useRecoilValue(filteredMarketListState);

  return (
    <>
      <div>Markets Container</div>
      <AddMarket />
      <FilterMarkets/>
      {/* mapping array of market jsx elements from market list */}
      {MarketList.map((market) => (
      <Market location = {market.location} key={market.id} id={market.id} zip={market.zip}/>
    ))}
    </>
  );
};

export default MarketsContainer;
