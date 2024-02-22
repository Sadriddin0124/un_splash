import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Travel = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("travel")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Travel"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Travel
