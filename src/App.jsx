import React from 'react'
import Button from './components/Button'
import { useState } from 'react';

function App() {
  let [bgMain, setBgMain] = useState("#3b3b3b")
  return (
    
    <div id="flex-wrapper" className='flex flex-col-reverse h-screen items-center duration-200' style={{backgroundColor: bgMain}}>

      <div id="button-bar" className='flex flex-row mb-15 w-auto gap-3
      bg-white/10 backdrop-blur-md border border-white/20
              rounded-xl py-4 px-6 text-white shadow-lg'>
        <Button name="Red" setBgfn={setBgMain}/>
        <Button name="Black" setBgfn={setBgMain}/>
        <Button name="Orange" setBgfn={setBgMain}/>
        <Button name="Green" setBgfn={setBgMain}/>
        <Button name="Purple" setBgfn={setBgMain}/>
        <Button name="Pink" setBgfn={setBgMain}/>
      </div>

    </div>
  )
}

export default App;
