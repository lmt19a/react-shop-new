import React from 'react';
import styled from 'styled-components';
import '../css/categories.css'

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
`;

const CategoryItem = ({ item }) => {
  return (
    <div className='flex-1 m-1 relative' style={{ height: '70vh' }}>
  <Image src={item.img} />
  <Info className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
    <Title>{item.title}</Title>
    <Button className='border-none p-3 bg-white cursor-pointer text-gray-950'>SHOW NOW</Button>
  </Info>
</div>
  );
};

export default CategoryItem;
