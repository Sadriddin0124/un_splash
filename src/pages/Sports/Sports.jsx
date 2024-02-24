import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Sports = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=>{
        getImages("sports")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Sports" desc="From adrenaline-fueled moments of victory to the camaraderie among athletes, this category celebrates the captivating world of sports photography. Showcasing both intensity and emotion, photographers freeze-frame the essence of competition, highlighting the dedication and spirit that define sports worldwide."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Sports
