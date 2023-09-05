import React, {useState} from 'react';
import {Header} from "../header/Header";
import styled from "styled-components";
import {CustomSlider} from "../customs/CustomSlider";
import {SubmitHandler, useForm} from "react-hook-form";


type LoginFormInputs = {
    city: string
    category: string
    marker: string
}

type CityType = {
    [city: string]: MarkerType[]
}

type MarkerType = {
    id: number
    category: string
    description: string
}

export const AddMarkersMainPage = () => {

    const [city, setCity] = useState<CityType>({
        ['Санкт-Петербург']: [
            {id: 1, category: 'cars', description: 'topCars'}
        ]
    });





    const {register, handleSubmit} = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {

    };

    return (
        <>
            <Header/>
            <AddMarkersWrapper>
                {/*<CustomSlider/>*/}
                <ContentWrapper>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder={'city'}
                               {...register('city')}
                        />
                        <input placeholder={'category'}
                               {...register('category')}
                        />
                        <input placeholder={'marker'}
                               {...register('marker')}
                        />
                        <button type={'submit'}>
                            addMarker
                        </button>
                    </form>

                </ContentWrapper>
                {}
            </AddMarkersWrapper>
        </>

    );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6em;
`

const AddMarkersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px

  //overflow: scroll;
  //overflow-x: hidden;
  //
  //&::-webkit-scrollbar {
  //  width: 3px;
  //
  //}
  //
  //&::-webkit-scrollbar-thumb {
  //  background-color: #7272ab;
  //  border-radius: 5px;
  //  width: 0px;
  //  border: 3px solid green;
  //}
  //
  //&::-webkit-scrollbar-track {
  //  background-color: #ad246a;
  //  border-radius: 5px;
  //}
  //
  //&::-webkit-scrollbar-button {
  //
  //
  //}
`