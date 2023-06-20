import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Frases from "../../../constants/frases.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {

    console.log(Frases)
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 5500,
                disableOnInteraction: false
            }}
        >
            {Frases.map((frase) =>
                <SwiperSlide><div className='p-10 '>{frase.frases}</div></SwiperSlide>
            )}

        </Swiper>
    );
}