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
      <Header background={images} title="Business & Work"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default BusinessWork
