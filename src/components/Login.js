import React, {useState} from 'react'
import '../styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import FooterLS from './FooterLS'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

function Login() {
    //creating state for input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    //signIn function
    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                navigate('/')
            })
        .catch(error => alert(error.message))
    }

    return (
       
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className='login__signInBtn'
                        type='submit'
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
            <div className='login__newUser'>
                <p className='login__registerTitle'>New to Amazon?</p>
                <Link to='/signup' className='register__link'>
                    <button className='login__registerBtn'>Create your Amazon account</button>
                </Link>
            </div>
            <FooterLS />
            
        </div>
    )
}

export default Login
