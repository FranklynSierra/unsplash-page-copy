import './App.css';
import Images from './components/Images';
import React, { useState, useEffect, useRef } from 'react'
import useFetch from './useFetch';
import axios from 'axios';
import logo from './img/unsplash-logo.png'
import Footer from './components/Footer';
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
    <img className='logoimg' alt='logo' src={logo}/>
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
    <div onClick={()=>handleSelection('cats')}>cats</div>
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
    <Footer/>
    </div>
   
    </div>
  );
}

export default App;




