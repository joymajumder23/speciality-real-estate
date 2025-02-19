import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import art from '../../assets/art1.jpg';
import hospital from '../../assets/hospital.png';
import school from '../../assets/school1.jpg';
import wedding from '../../assets/wedding.png';
import temple from '../../assets/temple.png';
import festive from '../../assets/festive1.jpg';
import terminal from '../../assets/terminal.png';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img className='rounded' src={art} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={hospital} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={school} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={temple} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={festive} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={wedding} alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded' src={terminal} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
