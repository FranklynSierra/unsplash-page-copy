import React, { useState ,useEffect} from 'react'

export default function useFetch(url) {
    const [image, setImage] = useState([]); 
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
   
    useEffect(() => {
  
      setloading(true)
       fetch(url)
      .then((res)=>res.json())
      .then((data)=>{setImage(data)})
      .catch((err)=>seterror(err))
      .finally(()=>setloading(false))
     
  
      // console.log(data)
      
    }, []);
    return {image,setImage,loading,error}
  
}
