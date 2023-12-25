import './App.css'
import { useState } from 'react';
function App(){
    const obj={
        name:"",
        email:"",
        password:""
    }
    const[data,setdata]=useState(obj);
    const[flag,setflag]=useState(false);
    function handleclick(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();
        if(!data.name|| !data.email|| !data.password){
            alert("details not filled")
        }
        else{
            setflag(true);
        }
    }
    return(
        <div className="main-div">
            {flag?<h1>Hey {data.name} you have successfully registered</h1>:<></>}
            <form action="" className='inner' onSubmit={handlesubmit}>
            <h1 className='h1main'>registration form</h1>
                <input type="text" name='name' placeholder="enter your name" value={data.name} onChange={handleclick}/>
                <br />
                <input type="email" name='email' placeholder="enter your email" value={data.email} onChange={handleclick}/>
                <br />
                <input type="password" name='password' placeholder="enter your password" value={data.password} onChange={handleclick}/>
                <br />
                <button type='submit'>register</button>
            </form>
        </div>
    )
}
export default App;