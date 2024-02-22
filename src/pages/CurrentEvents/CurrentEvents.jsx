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
      <Header background={images} title="Current Events"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default CurrentEvents
