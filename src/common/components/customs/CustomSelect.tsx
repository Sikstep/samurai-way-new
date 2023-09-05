import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";


export const CustomSelect = () => {

    const [viewMode, setMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setMode(true)
            setValue(e.currentTarget.value)
        } else if (!e.currentTarget.value) {
            setMode(false)
            setValue(e.currentTarget.value)
        }
    }

    const onClickHandler = () => {
        setMode(!viewMode)
    }

    return (
        <SelectWrapper>
            <div>
                <InputStyled onChange={onChangeHandler} placeholder={'All Areas'}/>
                <List mode={viewMode.toString()}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </List>
            </div>
            <ButtonStyled onClick={onClickHandler}>{viewMode? 'dn' : 'up'}</ButtonStyled>
        </SelectWrapper>

    );
};

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const List = styled.div<{ mode: string }>`
  display: ${props => props.mode === 'true' ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  width: 106%;
  border-radius: 0 0 10px 10px;
`

const InputStyled = styled.input`
  border: none;
  height: 4em;
  text-align: center;
  outline: none;

`

const ButtonStyled = styled.button`
  height: 2em;
  border: none;
  background-color: white;
  cursor: pointer;
  color: gray;
`