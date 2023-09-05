import React from 'react';
import {LayOut} from "LayOut";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {AddMarkersMainPage} from "common/components/create_markers_add_main/AddMarkersMainPage";


function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route index path={'/'} element={<LayOut/>}></Route>
                <Route index path={'/add_marker'} element={<AddMarkersMainPage/>}></Route>
            </Routes>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`

`