import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [image, setImage] = useState('');

    const handleUpdateUser = (e) => {
        updateUser(name, image)
            .then(() => {
                console.log('User Updated');
            })
    }
    return (
        <div>
            <h1>Update Profile</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <form onSubmit={handleUpdateUser} action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={e => setDisplayName(e.target.value)} name='name' type="text" placeholder="Full Name" className="input input-bordered rounded-none" value={displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input onChange={e => setImage(e.target.value)} name='image' type="text" placeholder="Photo URL" className="input input-bordered rounded-none" value={image} required />
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