import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Renders3D = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=>{
        getImages("3d-renders")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="3D Renders"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Renders3D
