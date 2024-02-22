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
      <Header background={images} title="Film"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Film
