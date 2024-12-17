import React from 'react'

export default function Welcome({stars}) {
  return (
    <div>
        {
            stars.map((star)=>
                <div>
                    {star}
                </div>
            )
        }
    </div>
  )
}
