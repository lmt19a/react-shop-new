import React from 'react'
import { categories } from '../data'
import  CategoryItem from './CategoryItem'
import { styled } from 'styled-components'

const Categories = () => {
  return (
    <div className='flex p-4 justify-between'>
        {categories.map(item=>(
            <CategoryItem item={item} key = {item.id}/>
        ))}
    </div>
  )
}

export default Categories