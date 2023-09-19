import React, {useState} from 'react';
import styled from "styled-components";
import {CustomSelect} from "common/components/customs/CustomSelect";
import {CarOutlined, HomeOutlined, SettingOutlined, ShoppingOutlined, StarOutlined} from "@ant-design/icons";
import {Header} from "common/components/header/Header";
import Video from './assets/video/city.mp4'
import {motion} from 'framer-motion';


export const LayOut = () => {

    const listVariants = {
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: 1 + (i)
            }
        }),
        hidden: {opacity: 0}
    }

    const [logo, setLogo] = useState([
        {id: 1, text: 'Unbiased Place Reviews'},
        {id: 2, text: 'Traveler Insights Shared'},
        {id: 3, text: 'Share your place experiences here'},
    ]);

    const icons = [
        {image: <HomeOutlined style={{color: "white", fontSize: 25}}/>, description: 'Apartments'},
        {image: <ShoppingOutlined style={{color: "white", fontSize: 25}}/>, description: 'Shopping'},
        {image: <CarOutlined style={{color: "white", fontSize: 25}}/>, description: 'Cars'},
        {image: <StarOutlined style={{color: "white", fontSize: 25}}/>, description: 'Raiting'},
        {image: <SettingOutlined style={{color: "white", fontSize: 25}}/>, description: 'Settings'},
    ]

    const iconsList = icons.map((el, i) => <Icons key={i}>{el.image}</Icons>)

    return (
        <LayOutWrapper>
            <FilteredBackground src={Video} autoPlay muted loop/>
            <Header/>
            <MainThemeWrapper>
                <>
                    <FormStyled>
                        <CustomSelect/>
                        <InputStyled placeholder={'Enter a location'}/>
                        <CustomSelect/>
                        <ButtonStyled>Search Now</ButtonStyled>
                    </FormStyled>
                </>
                <IconsWRapper>
                    {iconsList}
                </IconsWRapper>
            </MainThemeWrapper>
            <ContentWRapper>
                {logo.map((logo, i) => (
                    <motion.div
                        key={logo.id}
                        variants={listVariants}
                        initial='hidden'
                        animate='visible'
                        custom={i}
                    >
                        <ContentStyled index={logo.id}>
                            {logo.text}
                        </ContentStyled>
                    </motion.div>
                ))}
            </ContentWRapper>
        </LayOutWrapper>
    );
};

const LayOutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FilteredBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: blur(3px) brightness(80%) grayscale(.70);
  z-index: -1;
  object-fit: cover;
`;

const MainThemeWrapper = styled.div`
  z-index: 1;
  min-height: 300px;
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 50px;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  opacity: 0.9;
  background-position: center;
  background-size: cover;
  margin: 8em auto;
  border-radius: 20px;
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

const InputStyled = styled.input`
  height: 4em;
  text-align: center;
  outline: none;
  border: none;
  border-inline: 1px solid rgba(128, 128, 128, 0.56);
`

const IconsWRapper = styled.div`
  display: flex;
  gap: 65px;
`

const Icons = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.96);
  }
`

const ButtonStyled = styled.button`
  color: white;
  font-size: 14px;
  min-height: 4em;
  min-width: 10em;
  border: none;
  border-radius: 0 10px 10px 0;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.96);
    background-size: cover;
  }

  &:hover {
    color: white;
    background-image: none;
    background-color: #87b8cb;
  }
`

const ContentWRapper = styled.div`
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`


const ContentStyled = styled.div<{ index: number }>`
  color: white;
  font-family: 'Merriweather', serif;
  font-size: ${props => props.index === 1 ? '48px' : props.index === 2 ? '52px' : props.index === 3 ? '64px' : ''}
`