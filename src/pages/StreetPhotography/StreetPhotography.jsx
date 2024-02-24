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
      <Header background={images} title="Street Photography" desc="When the streets around you become your canvas, what can you discover? From quiet passages in charming towns to the hustle and bustle of larger cities — this category examines street photography in every form."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default StreetPhotography
