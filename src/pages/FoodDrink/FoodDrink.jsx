import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const FoodDrink = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("food-drink")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Food & Drink"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default FoodDrink
