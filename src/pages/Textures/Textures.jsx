import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Textures = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("textures-patterns")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Textures & Patterns"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Textures
