import { useAuth0 } from '@auth0/auth0-react'


function Login() {
  const {loginWithRedirect} = useAuth0();

  return (

      
      <button className='inputsubmit' onClick={()=>loginWithRedirect()}>Login</button>
    
  );
}

export default Login;





// import React from 'react'

// export default function login() {

// 
//   return (
//     <div>
//      
//     </div>
//   )
// }
