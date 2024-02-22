import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Sports = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=>{
        getImages("sports")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Sports"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Sports
