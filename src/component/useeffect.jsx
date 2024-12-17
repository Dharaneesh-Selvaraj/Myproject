import React from 'react'
import { useState,useEffect } from 'react';

export default function Useeffect() {
  const [val,setval] = useState(0);
  useEffect(()=>{
    console.log("rendered");
},[])
    return (
      <div>
          <p>
              {val}
          </p>
          <button className='border bottom-2 bg-green-400' onClick={()=>setval(val+1)}>click</button>
      </div>
    )
}
