import React from 'react'
import Usestate from './Usestate';

export default function Movies({value}) {
    let movieList = [
        {
            id:1,
            name:"DeadPool And Wolverine",
            description:"Description of the movie",
            image:"https://images.hdqwalls.com/download/deadpool-and-wolverine-in-a-city-ablaze-zm-1280x1024.jpg"
        },
        {
            id:2,
            name:"DeadPool 1",
            description:"Description of the movie",
            image:"https://images.hdqwalls.com/download/deadpool-and-wolverine-unstoppable-force-qa-240x400.jpg"
        },
        {
            id:3,
            name:" Wolverine 1",
            description:"Description of the movie",
            image:"https://images.hdqwalls.com/download/deadpool-and-wolverine-comedy-a5-1125x2436.jpg "
        }
        
    ]
      return (
        <div>
            {

                    movieList.map((val)=>
                        <div style={{display:'flex'}}>
                            <img src={val.image} height={"100px"} width={"100px"} alt="" />
                            <h1 className='bg-red-500'>{val.name}</h1>
                            
                            <Usestate />
                        </div>
                    )
            }
        </div>
      );
    
}
