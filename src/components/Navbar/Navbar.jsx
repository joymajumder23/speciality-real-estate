import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import profile from '../../assets/user.png';
import logo from "../../assets/jr.png";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listings">Listings</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>;

    // if(user !== null) {
    //     const photo = user.photoURL;
    //     return photo;
    // }

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Logout');
            })
            .catch(error => {
                toast.error(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <Link to="/" className="flex"><a className="btn btn-ghost text-xl"><img className="w-6" src={logo} alt="" />JR Developers</a></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:block">
                    {
                        user && <p>{user.displayName}</p>
                    }
                </div>
                <div className="dropdown dropdown-end z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img alt="" src={user.photoURL ? user?.photoURL : profile} /> : <img alt="" src={profile} />
                            }
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/updateProfile"><a className="justify-between">
                                Profile</a></Link>
                        </li>
                        <li><a>Settings</a></li>
                        {
                            user ? <button onClick={handleLogOut} className="btn">Logout</button> : ""
                        }
                    </ul>
                </div>
                {
                    user ? <button onClick={handleLogOut} className="btn">Logout</button> : <Link to="/login"><button className="btn">Login</button></Link>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;