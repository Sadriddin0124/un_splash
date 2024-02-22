import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Archival = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("archival")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Archival"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Archival
