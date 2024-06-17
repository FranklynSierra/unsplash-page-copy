import './App.css';
import Images from './components/Images';
import React, { useState, useEffect, useRef } from 'react'
import useFetch from './useFetch';
import axios from 'axios';

function App() {

  const imagesPerPage=20;

  const searchImput = useRef(null)
  
const [page, setpage] = useState(1);
const [totalImages, setTotalImages] = useState(0);
const {image,setImage,loading,error}=useFetch(`https://api.unsplash.com/photos?page=${page}&page=1&per_page=${imagesPerPage}&client_id=Zd1tWD2guqIm1pHlVnwTq4KgXNZtORI53LGfEqWYFAs`,)
 const fetchImages=async()=>{
  try {
    const {data }= await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchImput.current.value}&page=1&per_page=${imagesPerPage}&client_id=Zd1tWD2guqIm1pHlVnwTq4KgXNZtORI53LGfEqWYFAs` );
    console.log('data:',data.data)
    setImage(data.results)
    setTotalImages(data.total_pages)
   
  } catch (error) {
    console.log(error)
  }
 }
 const resetSearch=()=>{
  setpage(1)
  fetchImages()

 }
 const handleSearch = (e) => {
  e.preventDefault();
  resetSearch()

}
const handleSelection=(e)=>{
searchImput.current.value=e;
resetSearch()
}

useEffect(() => {
  fetchImages();
  
}, [page]);

  return (
    <div className="App">
   <div>
    <form className="search" onSubmit={handleSearch}>
    <img className='logoimg' alt='logo' src='data:image/png;base64,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'/>
      <input
        className='inputsearch'
        type="text"
        placeholder="Search Anything..."
        // value={img}
        // onChange={(e) => setImg(e.target.value)}
        ref={searchImput}
      />

<input className='inputsubmit' type="submit" value="Submit"/>
    </form>
    <div className='filters'>
    <div onClick={()=>handleSelection('Cakes')}>Cakes</div>
    <div onClick={()=>handleSelection('Wallpapers')}>Wallpapers</div> 
    <div onClick={()=>handleSelection('Renders 3D')}>Renders_3D</div>
    <div onClick={()=>handleSelection('travel')}>travel</div>
    <div onClick={()=>handleSelection('nature')}>nature</div>
    <div onClick={()=>handleSelection('space')}> space</div>
    <div onClick={()=>handleSelection('dreams')}>dreams</div>
    <div onClick={()=>handleSelection('cool')}>cool</div>
    <div onClick={()=>handleSelection('hello kitty')}>hello kitty</div>
   </div>
</div>

   {loading&&<li>Loading...</li>}
   {error&&<li>Sorry,There was a mistake {error}</li>}
<div className='imagesContainer'>
   {image.length>0&&(
      <Images className='imagenes' images={image}/>
      
     )}
   
     </div>
    <div>
      <div className='ContainbuttonPage'>

        {
          page>1&& (<button className='buttonPagereverse' onClick={()=>setpage(page - 1 )}><span>Previus</span></button>)
        
          
        }
        {
          page<totalImages&&(<button className='buttonPage' onClick={()=>setpage(page + 1 )}><span>Next</span></button>)
        }
    </div>
    </div>
    </div>
  );
}

export default App;




