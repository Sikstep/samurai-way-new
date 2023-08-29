import React from 'react';
import styled from 'styled-components';
import {CustomSelect} from './CustomSelect';

export const LayOut = () => {
    return (
        <LayOutWrapper>
            <BackgroundTheme>

            </BackgroundTheme>
            <Header>
                header
            </Header>
            <ContentWrapper>
                <FormStyled>
                    <CustomSelect/>
                    <InputStyled placeholder={'Enter location...'}/>
                    <CustomSelect/>
                    <button>Search now</button>
                </FormStyled>
                <IconsStyled>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                </IconsStyled>
            </ContentWrapper>
            <VoidDiv>
                void
            </VoidDiv>
        </LayOutWrapper>
    );
};

const LayOutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  z-index: 999;
  height: 4em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.84);
  display: flex;
  align-items: center;
  position: fixed;
`

const ContentWrapper = styled.div`
  z-index: 1;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 50px;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  background-position: center;
  background-size: cover;
`

const BackgroundTheme = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  background-image: url("https://img.freepik.com/premium-photo/sheung-wan-hong-kong-02-october-2018-hong-kong-city_328191-6043.jpg?w=1380");
  filter: blur(3px) brightness(80%) grayscale(.70);
`

const VoidDiv = styled.div`
height: 100vh;
`

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 600px;
  max-width: max-content;
  height: 6em;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4em;
  border-radius: 10px;
  padding-right: 1em;
  gap: 10px;
  background-color: white;
`

const IconsStyled = styled.div`
display: flex;
  gap: 65px;
`

const InputStyled = styled.input`
  text-align: center;
  border: none;
  outline: none;
  height: 4em;
  border-inline: 1px solid rgba(128, 128, 128, 0.56);
`