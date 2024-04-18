import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


const Contact = () => {
	const position = [51.505, -0.09];
	return (
		<div className="mt-10">

			<div>
				<div>
					<MapContainer style={{ height: '50vh', width: '100%' }} center={position} zoom={13} scrollWheelZoom={false}>
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
				<div className="w-full shadow-2xl bg-base-100 mt-4">
					<h1 className="text-5xl font-bold text-center p-4">Contact Us!</h1>
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" placeholder="email" className="input input-bordered rounded-none" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Message</span>
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
	);
};

export default Contact;