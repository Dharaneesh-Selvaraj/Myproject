import React from 'react'

export default function Navbar() {
  const nav={
  color:'blue'
  }
  return (
    <div>
      <ul style={{display:'flex',justifyContent:'space-evenly',listStyle:'none',backgroundColor:'#f0f0f0',padding:'10px',margin:'0'}}>
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
        <li>Watch List</li>
      </ul>
    </div>
  )
}
