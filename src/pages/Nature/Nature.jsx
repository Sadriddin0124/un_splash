import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Pictures from '../../components/Pictures/Pictures'
import PagesStore from '../../store/PagesStore/PagesStore'

const Nature = () => {
    const {images, getImages} = PagesStore()
    useEffect(()=> {
        getImages("nature")
    },[])
  return (
    <div className='w-[100%]'>
      <Header background={images} title={"Nature"}/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Nature