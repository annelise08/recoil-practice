import React from "react";
import MainContainer from "./containers/MainContainer";
import { RecoilRoot } from "recoil";

const App = () => {
    return (
        <RecoilRoot>
        <MainContainer />
        </RecoilRoot>
    )
}

export default App;