import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const BusinessWork = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("business-work")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Business & Work" desc="Reflecting the realities of the modern workplace in their many forms — from images of remote working and start-ups to shots of engineers and artists at work."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default BusinessWork
