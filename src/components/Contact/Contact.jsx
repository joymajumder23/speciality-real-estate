import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";



const Contact = () => {
    const position = [22.36209910790883, 91.81050702303207]
    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        
                        <div className="w-24 h-14">
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <h1 className="text-5xl font-bold p-4 text-center">Contact Us</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">message</span>
                                </label>
                                <input type="text" placeholder="message" className="input input-bordered rounded-none" required />
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;