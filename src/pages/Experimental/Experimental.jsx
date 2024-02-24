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
      <Header background={images} title="Experimental" desc="The Experimental category invites photographers to push the boundaries of conventional photography. With innovative techniques, unique perspectives, and unconventional subjects, this category is a playground for artistic exploration and boundary-defying creativity."/>
      <Pictures photos={images}/>
    </div>
  )
}

export default Experimental
