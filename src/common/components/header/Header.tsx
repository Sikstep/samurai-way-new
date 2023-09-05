import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <HeaderWrapper>
            <button>Home</button>
            <button>Return</button>
            <button>Add marker</button>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  z-index: 999;
  height: 4em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.84);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`

const AddMarkerBtn = styled(NavLink)`
  color: white;
  text-decoration: none;
  background-color: rgba(121, 175, 203, 0.64);
  padding: 10px;
  border-radius: 0 7px 7px 0;
  margin-right: 5px;

`