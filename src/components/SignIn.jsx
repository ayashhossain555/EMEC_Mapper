import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";

const SignIn = () => {

    const {signIn,  signInWithGoogle}= useContext(AuthContext)
    const navigate = useNavigate();

    const [seePass, setSeePass]= useState(false)

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/dashboard');
            })
            .catch(error => console.error(error))
    }

    const handleForgetPassword = e => {
        
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/dashboard');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl mt-8">
                <div className="hero-content flex-col">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-5xl text-accent font-bold">Sign In Now!</h1>
                        <p className="text-center py-6 w-2/3">Please sign in to access all the tools and start mapping your journey with EMEC Mapper.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='relative'>
                            <input type={seePass?"text":"password"} placeholder="password" name='password' className="input input-bordered w-full" required />
                            <span className='absolute right-3 top-4' onClick={()=>setSeePass(!seePass)}>{seePass?<FaEyeSlash />:<FaEye />}</span>
                        </div>
                        <label className="label">
                            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <div className="divider text-white">Or, Sign in with:</div>
                        <div className="flex flex-col gap-2 justify-center items-center content-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost border-2 border-accent"><span><FaGoogle /></span>Sign In with Google</button>
                        </div>
                        <div className='my-4'>
                            <p className='text-sm text-center'>New to EMEC Mapper App? Please <Link to="/signup"><a className='text-accent font-bold underline'>Sign Up!</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;