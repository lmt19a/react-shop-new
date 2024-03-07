import React, { useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { sliderItems } from '../data'; // Import sliderItems from data.js

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.direction === "left" && "left: 10px;"}
    ${props => props.direction === "right" && "right: 10px;"}
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Image = styled.img`
    width: 80%;
`

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`

const Desc = styled.p`
    font-size: 1.2rem;
    color: #555;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className='w-full h-screen flex relative overflow-hidden'>
            <Arrow className='h-12 w-12 bg-zinc-200 rounded-full flex items-center justify-center' direction="left" onClick={() => handleClick("left")}>
                <CaretLeftOutlined />
            </Arrow>
            <Wrapper className='h-full' slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} alt="Image" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title className='text-7xl'>{item.title}</Title>
                            <Desc className='mx-0 my-12 text-xl font-medium tracking-widest'>{item.desc}</Desc>
                            <button className='text-xl p-4 bg-transparent border'>SHOW NOW</button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow className='h-12 w-12 bg-zinc-200 rounded-full flex items-center justify-center' direction="right" onClick={() => handleClick("right")}>
                <CaretRightOutlined />
            </Arrow>
        </div>
    )
}

export default Slider;
