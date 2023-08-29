import React from 'react';
import styled from 'styled-components';
import {LayOut} from './LayOut';

export function App() {
    return (
        <AppWrapper>
            <LayOut/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  //height: 100svh;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //background-color: #fafafa;
`

export default App;
