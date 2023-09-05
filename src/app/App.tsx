import React from 'react';
import {LayOut} from "LayOut";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {AddMarkersMainPage} from "common/components/create_markers_add_main/AddMarkersMainPage";


function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route index path={'/markers_place/'} element={<LayOut/>}></Route>
                <Route index path={'/markers_place/add_marker'} element={<AddMarkersMainPage/>}></Route>
            </Routes>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`

`