import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [seePass, setSeePass]= useState(false)

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper case characters.')
            return;
        }

        createUser(email, password)
            .then(result => {
                setSuccess('Account Created Successfully.')
                console.log(result.user)
            })
            .catch(error => {
                setRegisterError(error.message);
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl mt-8">
                <div className="hero-content flex-col">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-5xl text-accent font-bold">Sign Up Now!</h1>
                        <p className="text-center py-6 w-2/3">Please sign up to experience the tools and start mapping your journey with EMEC Mapper.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-accent">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700 text-sm text-center font-semibold">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-sm text-center font-semibold">{success}</p>
                    }
                    <div className='my-4'>
                            <p className='text-sm text-center'>Already have an account? Please <Link to="/signin"><a className='text-accent font-bold underline'>Sign In!</a></Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;