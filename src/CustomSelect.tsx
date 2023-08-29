import React from 'react';
import styled from 'styled-components';

export const CustomSelect = () => {
    return (
        <SelectWrapper>
            <div>
                <InputStyledForCustomSelect/>
                <ListStyled>content</ListStyled>
            </div>
            <ButtonStyledForCustomSelect>
                up
            </ButtonStyledForCustomSelect>
        </SelectWrapper>
    );
};

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputStyledForCustomSelect = styled.input`
  text-align: center;
  border: none;
  outline: none;
  height: 4em;
`

const ButtonStyledForCustomSelect = styled.button`
  height: 2em;
  border: none;
  background-color: white;
  cursor: pointer;
  color: gray;
`

const ListStyled = styled.div`
  position: absolute;
  background-color: white;
  width: 200px;
  border-radius: 0 0 10px 10px;
`