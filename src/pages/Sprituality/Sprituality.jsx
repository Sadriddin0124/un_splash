import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Sprituality = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("sprituality")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Sprituality"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Sprituality
