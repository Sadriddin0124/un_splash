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
      <Header background={images} title="Travel" desc="Embark on a visual journey around the globe with this category, as photographers capture the essence of exploration and wanderlust. Through vibrant street scenes and immersive cultural experiences, the Travel category showcases the beauty and diversity of destinations near and far."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Travel
