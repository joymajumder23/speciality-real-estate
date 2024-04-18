import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    // console.log(user);
    const { displayName, photoURL } = user;
    // console.log(displayName, photoURL);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { fullName, image } = data;
        updateUser(fullName, image)
            .then(() => {
                toast.success('Successfully Updated');
                window.location.reload();
            })
    };
    return (
        <div className='mt-12'>
            <Helmet>
                <title>Home | Update Profile</title>
            </Helmet>
            <h1 className='text-3xl font-bold mb-4 p-4'>Update Profile</h1>
            <div className=" rounded bg-base-100 shadow-xl md:flex">
                <div>
                <div className='text-xl font-bold px-10'>
                    <h1>Profile:</h1>
                    <p>Name: <span>{user.displayName}</span></p>
                </div>
                <div>
                <figure><img className='w-full p-10' src={photoURL} alt="" /></figure>
                </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='fullName' type="text" placeholder={displayName} className="input input-bordered rounded-none" {...register("fullName", { required: true })} />
                            {
                                errors.fullName && <span className='text-red-600'>This field is required</span>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='image' type="text" placeholder="Image URL" className="input input-bordered rounded-none"
                                {...register("image", { required: false })} />
                        </div>
                        <div className="justify-end mt-2 w-1">
                            <button className="btn btn-primary rounded-none">Save</button>
                        </div>
                    </form>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default UpdateProfile;