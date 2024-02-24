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
      <Header background={images} title="Food & Drink" desc="From simple home-cooked dinners at home, to tasting new dishes while traveling — food connects us all. This category examines the world of food photography, with shots of everything from summer picnics in the park to decadent deserts."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default FoodDrink
