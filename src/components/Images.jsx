import React from 'react'
import Image from './Image'


export default function Images({ images }) {
// console.log(images)

    return (
      
             <div className='imagenes'>
            {
                images.map((image) =>
                    <Image  key={image.id} imageind={image}/>

                )
            } 

</div>
    )
}
