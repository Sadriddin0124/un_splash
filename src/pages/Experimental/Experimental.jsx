import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import PagesStore from '../../store/PagesStore/PagesStore'
import Pictures from '../../components/Pictures/Pictures'

const Experimental = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=>{
        getImages("experimental")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Experimental"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Experimental
