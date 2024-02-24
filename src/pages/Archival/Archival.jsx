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
      <Header background={images} title="Archival" desc="The Archival Topic explores captivating art and photography from renowned galleries, museums, and cultural institutions around the world who use Unsplash to showcase their archives. Journey through the pages of history, catching glimpses of our ancestors' stories, struggles, triumphs, and the timeless beauty of creative expression."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Archival
