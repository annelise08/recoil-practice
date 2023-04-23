import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { marketListFilterState, zipFilterState } from "./Atoms";

const FilterMarkets = () => {
  const [filter, setFilter] = useRecoilState(marketListFilterState);
  const [zipState, setZipState] = useRecoilState(zipFilterState)

  const handleChange = (e) => {
    setZipState(e.target.value)
  }

  // on click, should update market list filter state to zip code
  const handleClick = () => {
    setFilter('Filter');
  }

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick} onChange={handleChange} value={zipState}>Filter by Zipcode</button>
    </div>
  );
};

export default FilterMarkets;
