import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const HealthWellness = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("health-wellness")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Health & Wellness"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default HealthWellness
