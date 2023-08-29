import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';

export const CustomSelect = () => {

    const [value, setValue] = useState<string>('');
    const [mode, setMode] = useState<boolean>(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        // if(e.currentTarget.value) {
        //     setMode(true)
        // } else {
        //     setMode(false)
        // }
        setMode(!!e.currentTarget.value)
    }

    return (
        <SelectWrapper>
            <div>
                <InputStyledForCustomSelect value={value} onChange={onChangeHandler}/>
                <ListStyled mode={mode}>
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

const ListStyled = styled.div<{
    mode: boolean
}>`
  position: absolute;
  background-color: white;
  width: 200px;
  border-radius: 0 0 10px 10px;
  display: ${props => props.mode ? 'block' : 'none'};
`