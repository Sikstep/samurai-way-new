import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';

export const CustomSelect = () => {

    const [value, setValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
    }

    return (
        <SelectWrapper>
            <div>
                <InputStyledForCustomSelect value={value} onChange={onChangeHandler}/>
                <ListStyled>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </ListStyled>
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