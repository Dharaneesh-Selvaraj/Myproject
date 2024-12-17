import React from 'react'
import Navbar from './component/Navbar'
import Movies from './component/Movies'
import Welcome from './component/Welcome'
import Props from './component/props'
import Usestate from './component/Usestate'
import Useeffect from './component/useeffect'

export default function App() {
  let rating=[3,4,5];
  return (
    <div>
        {/* <Navbar />
        <Movies value={rating}/> */}
        <Useeffect />
    </div>
  )
}
