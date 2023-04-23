import React from "react";
import { atom } from "recoil";
  // atom is single source of truth for our project
  // here, marketListState will hold an array of market objects
export const marketListState = atom({
    key: "MarketList",
    default: [],
})

// location Id will keep track of which location # we are on
export const locationIdState = atom({
  key: "LocationId",
  default: 0
})
