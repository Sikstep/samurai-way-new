import React, {useState} from 'react';
import styled from "styled-components";
import map1 from '../../../assets/maps/1.jpg'
import map2 from '../../../assets/maps/2.jpg'
import map4 from '../../../assets/maps/4.jpg'
import map5 from '../../../assets/maps/5.jpg'


export const CustomSlider = () => {

        const [value, setValue] = useState<number>(0)
        const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

        const list = [map1, map2, map4, map5]

        const mappedList = list.map(el => <Card src={el} key={el}></Card>)

        const onclickHandlerLeft = () => {
            if (value === 0) {
                setValue(list.length - 1)
            } else setValue((prevState) => prevState - 1)
        }

        const onclickHandlerRight = () => {
            setValue((prevState) => {
                    if (prevState < list.length - 1) {
                        return prevState + 1
                    }
                    return 0
                }
            )
        }

        const startOnClickHandler = () => {
            const interval = setInterval(() => {
                onclickHandlerRight()
                setTimer(interval)
            }, 1000)
        }

        const stopOnClickHandler = (timer: any) => {
            clearInterval(timer)
        }

        return (
            <ContentWrapper>
                {mappedList[value]}
                <SliderWrapper>
                    <button onClick={onclickHandlerLeft}>left</button>
                    <div>
                        {mappedList}
                    </div>
                    <button onClick={onclickHandlerRight}>right</button>
                </SliderWrapper>
                <div>
                    <button onClick={startOnClickHandler}>start</button>
                    <button onClick={() => stopOnClickHandler(timer)}>stop</button>
                </div>
            </ContentWrapper>
        )
    }

const ContentWrapper = styled.div`
  margin: 60px auto;
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  padding: 20px;
`

const SliderWrapper = styled.div`
  display: flex;
`

const Card = styled.img`
  width: 200px;
  height: 100px;
`