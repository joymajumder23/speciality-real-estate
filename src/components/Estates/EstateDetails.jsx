import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estates = useLoaderData();
    console.log(estates);

    const { id } = useParams();
    const intId = parseInt(id);
    console.log(typeof intId);
    const aEstate = estates.find(estate => estate.id === intId);
    console.log(aEstate);
    const {image} = aEstate;
    return (
        <div>
            <h1>Estates: {estates.length}</h1>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;