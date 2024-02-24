import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Nature = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("nature")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title={"Nature"} desc="Nature's wonders take center stage in this category, where photographers capture the breathtaking landscapes, diverse flora and fauna, and mesmerizing natural phenomena that adorn our planet. From grand vistas to macro shots, these images transport viewers into the heart of the great outdoors."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Nature
