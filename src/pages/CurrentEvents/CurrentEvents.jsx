import React, { useEffect } from 'react'
import PagesStore from '../../store/PagesStore/PagesStore'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'

const CurrentEvents = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("current-events")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Current Events" desc="Photographs influence how we understand the world around us. This category is all about capturing those news-worthy moments around the globe — from political protests to cultural celebrations. When submitting, please provide a photo description so we understand the full context of the image."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default CurrentEvents
