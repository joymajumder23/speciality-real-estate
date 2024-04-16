import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";

const EstateDetails = () => {
    const estates = useLoaderData();
    console.log(estates);

    const { id } = useParams();
    const intId = parseInt(id);
    console.log(typeof intId);
    const aEstate = estates.find(estate => estate.id === intId);
    console.log(aEstate);
    const { image, estate_title, description, facilities, segment_name, area, status, price } = aEstate;
    return (
        <div>
            <div className="md:flex gap-4">
                <div className="card w-full bg-base-100 shadow-xl rounded-none">
                    <figure><img className="w-96" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{estate_title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-start">
                            <Link to="/"><button className="btn btn-primary rounded-none flex items-center gap-1"><IoIosArrowBack></IoIosArrowBack> Back to home</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-base-100 shadow-xl rounded-none">
                        <div className="card-body">
                            <h2 className="card-title text-3xl mb-3">Information <span className="badge badge-secondary">{status}</span></h2>
                            <hr />
                           <div>
                            <h3 className="text-xl font-bold mb-3 border-b">{segment_name}</h3>
                            <h3 className="text-xl">Facilities:</h3>
                           <div className="mb-3 border-b">
                           {
                                facilities.map(data => <div className="badge badge-outline mr-2 mb-2">{data}</div>)
                            }
                           </div>
                            <p className="flex items-center gap-1 text-xl mb-3 border-b"><FaChartArea></FaChartArea> Area: {area}</p>
                            <p className="flex items-center gap-1 text-xl mb-3 border-b"><CiLocationOn></CiLocationOn> Loaction: {area}</p>
                           </div>
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-1"><ImPriceTags></ImPriceTags> Price: <span>{price}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;