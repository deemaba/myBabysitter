import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "../../ swiper/react/swiper-react.js";
import { Swiper, SwiperSlide } from "../../../node_modules/swiper/react/swiper-react";
// Import Swiper styles
import '../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../node_modules/swiper/swiper.min.css'
import "../../../node_modules/swiper/modules/pagination/pagination.scss";
import "../../../node_modules/swiper/modules/autoplay/autoplay.scss";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

export default function ImageCarousel() {
    return (
        <>
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={
                    {
                        disableOnInteraction: false,
                        delay: 3000
                    }
                }
                slidesPerView={1}
                navigation={true}

                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-slider-main">
                        <img src='./img/baby22.jpg' alt="baby" width='100%' ></img>
                        <div className="hero-content">
                            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600}>
                                <p>Easily Find a Good Nanny</p>
                                <h1>Play, Share, Laughe, Make the experience of child care enjoyable,as it should be</h1>
                                {/* <div className="d-flex">
                                    <button className="boxed-btn">Book Now</button>
                                    <button className="bordered-btn">Explore</button>

                                </div> */}

                            </Reveal>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-slider-main">
                        <img src='./img/hero-bg-2.jpg' alt="baby" width='100%' ></img>
                        <div className="hero-content">
                            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} >
                                <p>Find your ideal childcare job</p>
                                <h1>MyBabysitter is an easy and safe place for finding nanny jobs</h1>
                                {/* <div className="d-flex">
                                    <button className="boxed-btn">Book Now</button>
                                    <button className="bordered-btn">Explore</button>

                                </div> */}

                            </Reveal>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-slider-main">
                        <img src='./img/hero-bg-3.jpg' alt="baby" width='100%' ></img>
                        <div className="hero-content">
                            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} >
                                <p>Easily Find a Good Nanny</p>
                                <h1>Here you can find a big heart to shape a little mind!!</h1>
                                {/* <div className="d-flex">
                                    <button className="boxed-btn">Book Now</button>
                                    <button className="bordered-btn">Explore</button>

                                </div> */}

                            </Reveal>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}