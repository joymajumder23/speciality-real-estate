import { useLoaderData } from "react-router-dom";

const Estates = () => {
    const estatesCard = useLoaderData();
    console.log(estatesCard);
    return (
        <div>
            
        </div>
    );
};

export default Estates;