import './App.css';
import Home from './pages/home';
import appFirebase from '../src/Credential'
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import Login from './pages/Login';
import { useState } from 'react';

const auth=getAuth(appFirebase)
function App() {

 const [user, setUser] = useState(null);
 onAuthStateChanged(auth,(userFirebase)=>{
  if(userFirebase){
    setUser(userFirebase)
  }else{
    setUser(null)
  }
 })
 
 
  return (
    <div className="App">
    <div className='scroll-watcher'></div>
      {user?<Home correoUsuario={user.email}/>:<Login/>}
   
    </div>
  );
}

export default App;




