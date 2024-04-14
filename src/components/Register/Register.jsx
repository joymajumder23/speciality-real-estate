import signUX from '../../assets/signUp.svg'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <img src={signUX} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered rounded-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center p-4'>Have an account? <Link to="/login"><a className="link link-error font-bold">Login</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;