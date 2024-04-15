import { Link, useNavigate } from 'react-router-dom';
import signUX from '../../assets/signUp.svg';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Login');
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

            setError('');
    }

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success('Successfully Login');
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img src={signUX} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>
                            {
                                error && <small className='text-red-600'>{error}</small>
                            }
                            <hr />
                            <p className='text-center'>or</p>
                            <hr />
                            <div>
                                <Link><button onClick={handleGoogle} className='btn btn-ghost w-full'><FcGoogle></FcGoogle> Login with Google</button></Link>
                                <Link><button className='btn btn-ghost w-full'><FaGithub></FaGithub> Login with Github</button></Link>
                            </div>
                        </form>
                        <p className='text-center p-4'>Dont have an account? <Link to="/register"><a className="link link-error font-bold">Register</a></Link></p>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;