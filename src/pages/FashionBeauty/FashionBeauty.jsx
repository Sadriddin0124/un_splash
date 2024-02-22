import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const FashionBeauty = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("fashion-beauty")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="Fashion & Beauty"/>
      <Pictures photos={images}/>
    </div>
  )
}

export default FashionBeauty
