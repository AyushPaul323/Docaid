import React,{ useRef, useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react';
//import AddBlog from '../AddBlog/AddBlog';
import "./member.css";
import { useNavigate } from 'react-router-dom';
import Admin from '../pages/admin';
const Member = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const Navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user==="Ayush Paul" && pwd === "1234" || user==="ILS" && pwd === "ils" )
        {
            setSuccess(true);
            Navigate("/admin")
            // window.location.replace('https://console.firebase.google.com/u/0/project/no-starve/database/no-starve-default-rtdb/data')
        }
        else
        {
            setErrMsg("Wrong Password for this username");
        }
    }

    
  return (
    <>{(success) ? 
        <div>
            <Admin />
        </div> :
        <div className="bgm" >
		<div className="containerAd" >
			
			<div className="form_containerAd">
                <section className="Appo2"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="left12"><img src='https://res.cloudinary.com/dxxjc0u2h/image/upload/v1679332664/Screenshot__704_-removebg-preview_jdspqe.png' alt='pic' /></div>
                    <h1 className='sig'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        
                        <div className='bu'><Button type="submit" colorScheme='red' className='a11'>
                            Sign In</Button></div>
                    </form>
                </section>
                </div>
		</div>
		</div>
  }</>)
}

export default Member