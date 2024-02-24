import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Film = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages()
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Film" desc="Embracing the nostalgia and artistry of analog photography, this category pays tribute to the timeless beauty of film. Photographers capture moments with the rich textures, unique color palettes, and inherent imperfections that make film photography a cherished medium. From dreamy landscapes to intimate portraits, this category celebrates the enduring allure of capturing light on emulsion."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Film
