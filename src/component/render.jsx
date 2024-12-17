import React from 'react'

export default function Render() {
    let count=1;
  return (
    
        <div>{

            count?
            <button style={{backgroundColor:'Blue'}}>Buy Now</button>
            :
            <button style={{backgroundColor:'red'}}>Buy Now</button>
        }
    </div>
    
  )
}
