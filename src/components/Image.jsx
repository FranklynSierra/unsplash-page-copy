import React from 'react'


export default function Image({ imageind }) {
  


  return (
    <div  className='imageContainer'>
     <div >
        <img className='imagen' src={imageind.urls.small} alt='img' />
        {/* <a href={image.urls.small} download={image.url.small}></a> */}
        </div>
      
        <button className='buttonDowload' onClick={()=>{
          downloadImage(imageind.urls.small,imageind.alt_description)}}>download link</button>
    
     
    </div>
  )
}
const downloadImage = async(imageSrc, imageName,forceDowload) => {
  if(!forceDowload){
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  // const imagefetch=await fetch(imageSrc).then((res)=>res.blob())
  const imagefetch=await fetch(imageSrc)
  .then((res)=>res.arrayBuffer()
  .then((bluffer)=>new Blob([bluffer],{type:'image/jpeg'}))
)

  
  console.log(imagefetch)
  const link = document.createElement('a');
  link.href =URL.createObjectURL(imagefetch);
  link.download = imageName;
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


// import LightGallery from 'lightgallery/react/Lightgallery.es5'
// import React from 'react'
// import 'lightgallery/css/lightgallery.css';
// // import 'lightgallery/css/lg-zoom.css';
// // import 'lightgallery/css/lg-thumbnail.css';

// // // If you want you can use SCSS instead of css
// // import 'lightgallery/scss/lightgallery.scss';
// // import 'lightgallery/scss/lg-zoom.scss';

// export default function Image({ image }) {
//   const onInit = () => {
//     console.log('lightGallery has been initialized');
// };
//   return (
//     <div>
//     <LightGallery  onInit={onInit} speed={500}>
      
//         <img  className='imagen' src={image.urls.small} alt='img' />
//         {/* <a href={image.urls.small} download={image.url.small}></a> */}
//         </LightGallery>
//         <button  onClick={()=>{
//           downloadImage(image.urls.small,image.alt_description)}}>dfgrdg</button>
      
  
//     </div>
//   )
// }
// const downloadImage = async(imageSrc, imageName,forceDowload) => {
//   if(!forceDowload){
//     const link = document.createElement('a');
//     link.href = imageSrc;
//     link.download = imageName;
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }
//   // const imagefetch=await fetch(imageSrc).then((res)=>res.blob())
//   const imagefetch=await fetch(imageSrc)
//   .then((res)=>res.arrayBuffer()
//   .then((bluffer)=>new Blob([bluffer],{type:'image/jpeg'}))
// )

  
//   console.log(imagefetch)
//   const link = document.createElement('a');
//   link.href =URL.createObjectURL(imagefetch);
//   link.download = imageName;
//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)
// }