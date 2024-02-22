import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const StreetPhotography = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("street-photography")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Street Photography"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default StreetPhotography
