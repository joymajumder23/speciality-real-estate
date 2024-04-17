import Slider from "../../layouts/SwiperSlider/Swiper";
import 'animate.css';

const Header = () => {
    return (
        <div className="mt-10">
            <div className="relative">
            <Slider></Slider>  
            </div>
            <h3 className="absolute -mt-32 ml-32 lg:-mt-72 z-10 lg:text-7xl lg:ml-40 text-center font-extrabold text-white outline-dotted drop-shadow-md animate__animated animate__zoomIn">Crafting Exceptional <br /> <span className="text-yellow-400">Real Estate Experiences</span></h3>
        </div>
    );
};

export default Header;