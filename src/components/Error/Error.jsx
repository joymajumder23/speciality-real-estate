import { Link } from 'react-router-dom';
import error from '../../assets/404 error.gif'
const Error = () => {
    return (
        <div>
            <img className="w-[1300px] h-[645px] mx-auto absolute" src={error} alt="" />
            <Link to="/"><button className='btn btn-primary rounded-none relative mt-8 ml-12'>Back to home</button></Link>
        </div>
    );
};

export default Error;