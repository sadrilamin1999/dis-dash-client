"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { data } from "@/data/sliderimages";

const Hero = () => {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
