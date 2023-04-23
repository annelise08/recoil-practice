import React from "react";
import { useState } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import { marketListState } from "./atoms";

// want add market to update state for all markets based on input
const AddMarket = () => {
  // should return a form with an input label
  // on change, form should update the markets container state
  const [market, setMarket] = useState("");

  // get marketlist from atom
  const [marketList, setMarketList] = useRecoilState(marketListState);

  // function to update state based on input field
  const onChange = (e) => {
    setMarket(e.target.value);
  };

  // when add market button is clicked, we want to update marketListState atom
  const handleClick = () => {
    setMarketList((oldMarketList) => [
      ...oldMarketList,
      {
        location: market,
      },
    ]);
    // reset market to empty string
    setMarket("");
  };

  return (
    <div>
      <input type="text" value={market} onChange={onChange} />
      <button onClick={handleClick}>Add market</button>
    </div>
  );
};

export default AddMarket;
