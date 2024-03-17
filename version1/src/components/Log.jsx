import React, { useState } from 'react'
import "./loginpage.css";

export const Log = () => {

   const [action,setAction] = useState("Login");

  return (
    <>     
   
<div className='container'>
   <div className="header">
    <div className="text">{action}</div>
   </div>
   <div className="inputs">
  {/* input field*/}
    {action==="Login"?<div></div>:<div className="input">
      <input className='in' type="email" placeholder='Name'/>  
    </div>}


    <div className="input">
      <input className='in' type="email" placeholder='E-mail'/>  
    </div>

    <div className="input">
      <input className='in' type="text"  placeholder='password'/>  
    </div>

    {action==="Login"?<div></div>:<div className="input">
      <input className='in' type="text"  placeholder='confirm password'/>  
    </div>}

    
    
   </div>
   {action==="Sign Up"?<div></div>:<div className="forgot-password  text-center">Forgotten <span>Password?</span></div>}
   
   <div className="submit-container">
   <div className={action==="Login"? "submit grey": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"? "submit grey2": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
   </div>
</div>

</>
  )       
}

export default Log;