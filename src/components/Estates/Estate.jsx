import { CiLocationOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
    console.log(estate);
    const {id, image, estate_title, facilities, location, segment_name, area} = estate;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl rounded-none">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {estate_title}
                    </h2>
                    <div className="badge badge-secondary w-9/12 text-center">{segment_name}</div>
                    <div className="">
                        <p>Facilities:</p>
                        <hr />
                        <div className="mt-2">
                        {
                            facilities.map((data) => <div className="badge badge-outline mr-2 mb-2">{data}</div>)
                        }
                        </div>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"><FaChartArea></FaChartArea> {area}</p>
                        <p className="flex items-center gap-1"><CiLocationOn></CiLocationOn> {location}</p>
                        </div>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`}><button className="btn btn-accent rounded-none">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;