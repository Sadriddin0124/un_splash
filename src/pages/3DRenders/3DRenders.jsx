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
      <Header background={images} title="3D Renders" desc="Blending technology and artistry, the 3D Renders category showcases digitally rendered creations that blur the lines between reality and imagination. From architectural visualizations to fantastical worlds, this category exhibits the limitless possibilities of digital craftsmanship."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Renders3D
