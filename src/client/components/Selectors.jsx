import { selector } from "recoil";
import { marketListState, marketListFilterState, zipFilterState } from "./Atoms";

export const filteredMarketListState = selector({
    key: "FilteredMarketList",
    get: ({get}) => {
        // get zipcode to filter by
        const zip = get(zipFilterState);
        // get name of filter from market list filter atom
        const filter = get(marketListFilterState);
        // get list of market objects
        const marketList = get(marketListState);

        switch (filter) {
            case 'Filter':
                return marketList.filter((el) => {return el.zip == zip});
            default:
                return marketList;
        }
    },
});