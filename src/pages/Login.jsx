import React, { useState } from 'react'
import appFirebase from '../Credential';
import { signInWithPopup,GoogleAuthProvider,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
const auth=getAuth(appFirebase)
const provider=new GoogleAuthProvider()
export default function Login() {

const [value, setvalue] = useState('');
    const [registering, setRegistering] = useState(false);
    const functAuth=async(e)=>{
       e.preventDefault();
       const correo=e.target.email.value;
       const contraseña=e.target.password.value
       
      if(registering){
        try{
            await createUserWithEmailAndPassword(auth,correo,contraseña)
        }catch(err){
          console.log(err)
        alert('the email is already in use')
        }
      }else{
        try{
        await signInWithEmailAndPassword(auth,correo,contraseña)
        }catch(err){
          console.log(err)
            alert('the email or password have errors')
        }
       
      }
    }
const handleClick=()=>{
  signInWithPopup(auth,provider).then((data)=>{
   
    setvalue(data.user.email)
  })
}
  return (
    <div className='loginContainer'>
      
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEUAAAD///9TU1NNTU2GhoZCQkLZ2dn6+vorKytpaWnQ0NAgICCioqLBwcH8/Pzb29t5eXkODg6pqalycnKYmJgXFxfExMQoKCgaGhpDQ0M4ODiZZhZaAAACkklEQVR4nO3dgXKiMBhF4cRdGiAE0da29v0fdLFURF06Zprsn2TP9wDOPTOYOlQHpW+Zthsqu1O52dlq6Fpz16Nu8lwjvfSHGme+Kez3tfTAAOquXyt0VnpcIAf310KT+/W51Jj7wm0JF+jF2/a2sJWeFFx7XVhe4Jw4FW6l10SxvRSaN+kxUdRmLizpFF1qzoVOekk0birs36WHRGP7z8JOekdE+1OhKetP/bXxsFEFvwtP3FhY6kE6abQy0hsiM6rEz2tLrSr5JD3p1CA9IbJBVdITIqtUKXcu1liV321DP6X3AQAAAAAAAPk7/vKT353p+TtJD8rvCy9PnoVP0oO9UUhh+iikMH0UUpg+CilMH4UUpo9CCtNHIYXpo5DC9FFIYfoopDB9FFKYvvL/y/3828+z9GAAAAAAAADgn9o8fHfw6PnKx4dfeROl7OzxQt/fMVUUUhgIhRSuo5DCUCikcB2FFIZCIYXrKKQwFAopXEchhaFQSOE6CikMhUIK11FIYSgUXnx4vvJHdoUvnr+ZecmuMB4KKaRQHoUUUiiPQgoplEchhRTKo5BCCuVRSCGF8iikkEJ5FFJIoTwKKfzfCw8bz8eLhrc5RC0EAAAAAAAAsGYnPSCynbLSEyKzyvd3grmp1CA9IbJBddITIutUKz0hslYZ6QmRGaUb6Q1RNVppJz0iKjcWmlp6RUS1GQv1XnpGRHt9KuzfpXdEY/vPwoLfiU5PhcUep40+FxZ62IzHzLkwwwe5PmJ6nO1UqEv87NbqZWGBiV+Bc6HelvVerOcnLs+F2pR0ojZG3xdq/VrKHQ3rFlXLQt3vS7hU667Xa4Xjpfqa+7XaOHOddFN4imy7obL53WTc2WroWnPX8wcN+zaFTWwciAAAAABJRU5ErkJggg=='alt='logo'/>
        <form onSubmit={functAuth} className='loginform'>
            <input id='email' type='text'placeholder='Email...'className='inputsearch'/>
            <input id='password' type='password'placeholder='Password...'className='inputsearch'/>
         <div>
            <button   className='logInRes'>{registering?'Register':'Log In'}</button>
            </div>
        </form>
    <div className='question'>
      <h4 className='accountquestion'>{registering?'if you already have an account?':'You do not have an account?'}<button  className='inputsubmit register' onClick={()=>setRegistering(!registering)}><span>{registering?'Log In':'Register'}</span></button></h4> 
      </div>
     <button className='inputsubmit google' onClick={handleClick}>
     
  
    <div>
       <ion-icon className='icon'name="logo-google"></ion-icon>
       
     <span className='spanGoogle'>Sigin with Google</span>
    
     </div>
     </button>
     
    </div>
  )
}
