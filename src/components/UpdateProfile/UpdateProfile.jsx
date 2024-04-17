import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { displayName, photoURL} = user;
    console.log(displayName, photoURL);
    return (
        <div className='mt-12'>
            <Helmet>
            <title>Home | Update Profile</title>
            </Helmet>
            <h1 className='text-3xl font-bold mb-4'>Update Profile</h1>
            <div className=" rounded bg-base-100 shadow-xl md:flex">
                <figure><img className='w-full p-10' src={photoURL} alt="" /></figure>
                <div className="card-body">
                    <form action="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Full Name" value={displayName} className="input input-bordered rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='image' type="text" placeholder="Image URL" className="input input-bordered rounded-none" required />
                    </div>
                    </form>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;