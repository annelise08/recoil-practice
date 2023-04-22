import { atom } from "recoil";
  // atom is single source of truth for our project
  // here, marketListState will hold an array of market objects
export const marketListState = atom({
    key: "MarketList",
    default: [],
});
