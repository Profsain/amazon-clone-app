import React, { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signup.css'
import FooterLS from './FooterLS'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth'

function Signup() {
    //create state for each input field
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerified, setPasswordVerified] = useState('')
    const navigate = useNavigate()
    
    const signUp = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                if (user) {
                    updateProfile({
                        displayName: displayName,
                        passwordVerified: passwordVerified
                    }).then((user) => {
                        console.log(user)
                    })
                    //send email verification
                    sendEmailVerification(auth.currentUser)
                    //switch to home page
                    
                    navigate('/')
                }
            })
            .catch((error) => alert(error.message));
        
    }

  
    return (
        <div className='signup'>
             <Link to='/'>
                <img
                    className='signup__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon logo'
                />
            </Link>

            <div className='signup__container'>
                <h1>Create account</h1>
                <form>
                    <h5>Your name</h5>
                    <input
                        type='text'
                        value={displayName}
                        onChange={e => setDisplayName(e.target.value)}
                    />

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

                    <p>Passwords must be at least 6 characters.</p>

                    <h5>Re-enter password</h5>
                    <input
                        type='password'
                        value={passwordVerified}
                        onChange={e => setPasswordVerified(e.target.value)}
                    />

                    <button
                        className='signup__button'
                        type='submit'
                        onClick={signUp}
                    >Verify email</button>
                </form>
                <p>
                    By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <div className='signup__option'>
                    <p> Already have an account? <span>
                        <Link to='/login' className='signup__optionLink'>Sign-In</Link>
                    </span>

                    </p>
                    <p>Buying for work? <span>
                        <Link to='/login' className='signup__optionLink'>Create a free business account</Link>
                        </span>
                    </p>
                </div>
            </div>

            <FooterLS />
        </div>
    )
}

export default Signup
