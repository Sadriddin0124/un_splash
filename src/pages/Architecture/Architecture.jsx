import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Architecture = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("architecture-interior")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Architecture & Interiors"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Architecture
