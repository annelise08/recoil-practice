import React from "react";
import { atom, useRecoilValue } from "recoil";
import AddMarket from "../AddMarket";
import { marketListState } from "../atoms";

const MarketsContainer = () => {


  const MarketList = useRecoilValue(marketListState);
  return (
    <>
      <div>Markets Container</div>
      <AddMarket />
    </>
  );
};

export default MarketsContainer;
