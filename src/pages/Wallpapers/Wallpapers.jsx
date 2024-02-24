import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Wallpapers = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("wallpapers")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Wallpapers" desc="From epic drone shots to inspiring moments in nature — submit your best desktop and mobile backgrounds."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Wallpapers
