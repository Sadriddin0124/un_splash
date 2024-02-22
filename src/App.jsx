import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Editorial from './pages/Editorial/Editorial'
import CoolTones from './pages/Cool Tones/CoolTones'
import SearchPage from './pages/SearchPage/SearchPage'
import Wallpapers from './pages/Wallpapers/Wallpapers'
import Nature from './pages/Nature/Nature'
import Renders3D from './pages/3DRenders/3DRenders'
import Travel from './pages/Travel/Travel'
import Architecture from './pages/Architecture/Architecture'
import Textures from './pages/Textures/Textures'
import StreetPhotography from './pages/StreetPhotography/StreetPhotography'
import Film from './pages/Film/Film'
import Archival from './pages/Archival/Archival'
import Experimental from './pages/Experimental/Experimental'
import Animal from './pages/Animal/Animal'
import FashionBeauty from './pages/FashionBeauty/FashionBeauty'
import People from "./pages/People/People"
import Sprituality from './pages/Sprituality/Sprituality'
import BusinessWork from "./pages/BusinessWork/BusinessWork"
import FoodDrink from "./pages/FoodDrink/FoodDrink"
import HealthWellness from './pages/HealthWellness/HealthWellness'
import Sports from './pages/Sports/Sports'
import CurrentEvents from "./pages/CurrentEvents/CurrentEvents"
const App = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div>
      <div className='min-h-[100px]'>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Editorial searchValue={searchValue} setSearchValue={setSearchValue}/>}></Route>
          <Route path="search" element={<SearchPage searchValue={searchValue}/>}></Route>
          <Route path="cooltones" element={<CoolTones />}></Route>
          <Route path='wallpaper' element={<Wallpapers/>}></Route>
          <Route path='nature' element={<Nature/>}></Route>
          <Route path='3drenders' element={<Renders3D/>}></Route>
          <Route path='travel' element={<Travel/>}></Route>
          <Route path='architecture' element={<Architecture/>}></Route>
          <Route path='textures' element={<Textures/>}></Route>
          <Route path='streetphotography' element={<StreetPhotography/>}></Route>
          <Route path='film' element={<Film/>}></Route>
          <Route path='archival' element={<Archival/>}></Route>
          <Route path='experimental' element={<Experimental/>}></Route>
          <Route path='animals' element={<Animal/>}></Route>
          <Route path='fashionbeauty' element={<FashionBeauty/>}></Route>
          <Route path='people' element={<People/>}></Route>
          <Route path='spirituality' element={<Sprituality/>}></Route>
          <Route path='business-work' element={<BusinessWork/>}></Route>
          <Route path='food-drink' element={<FoodDrink/>}></Route>
          <Route path='health-wellness' element={<HealthWellness/>}></Route>
          <Route path='sports' element={<Sports/>}></Route>
          <Route path='current-events' element={<CurrentEvents/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
