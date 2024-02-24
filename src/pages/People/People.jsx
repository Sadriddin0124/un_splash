import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const People = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("people")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title="People" desc="People are the focal point of this category, where photographers skillfully depict the human experience. From candid moments to formal portraits, this category showcases the myriad emotions, cultures, and stories that define us."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default People
