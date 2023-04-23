import React from "react";
import { useState } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import { marketListState, locationIdState } from "./Atoms.jsx";

// want add market to update state for all markets based on input
const AddMarket = () => {
  // should return a form with an input label
  // on change, form should update the markets container state
  const [market, setMarket] = useState("");

  // get marketlist from atom
  const [marketList, setMarketList] = useRecoilState(marketListState);

  // get current location id from atom
  const [locationId, setLocationId] = useRecoilState(locationIdState);

  // function to update state based on input field
  const onChange = (e) => {
    setMarket(e.target.value);
  };

  // when add market button is clicked, we want to update marketListState atom
  const handleClickAdd = () => {
    // setMarketList is a setter function derived from using useRecoilState (reads state and gives us a setter function)
    setMarketList((oldMarketList) => [
      ...oldMarketList,
      {
        location: market,
        id: locationId
      },
    ]);
    // reset market to empty string
    setMarket("");
    // reset locationId atom, increasing it by 1
    setLocationId((oldId) => oldId + 1);
  };

  return (
    <div>
      <input type="text" value={market} onChange={onChange} />
      <button onClick={handleClickAdd}>Add market</button>
    </div>
  );
};

export default AddMarket;
