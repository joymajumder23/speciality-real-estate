import { useContext, useState } from 'react';
import signUX from '../../assets/signUp.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        console.log(name, email, photo, password, confirmPassword);

        
        if(password.length < 6){
            setError('password must be 6 characters');
            return;
        }

        else if(password !== confirmPassword){
            setError('password did not matched');
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('must have an Uppercase letter in the password');
            return;
        }
        else if(!/^(?=.*[a-z]).+$/.test(password)){
            setError('must have an Lowercase letter in the password');
            return;
        }
        setError("");
        // setSuccess("");
        
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfuly registered');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <img src={signUX} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered rounded-none" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='confirmPassword' type="password" placeholder="password" className="input input-bordered rounded-none" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                {
                                    error && <p className='text-red-600'>{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {/* {
                            success && <p>{success}</p>
                        } */}
                        {
                            error && <p className='text-red-600 ml-8'>{error}</p>
                        }
                        <p className='text-center p-4'>Have an account? <Link to="/login"><a className="link link-error font-bold">Login</a></Link></p>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;