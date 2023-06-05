"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { data } from "@/data/sliderimages";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={1080}
                priority
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2] text-center space-y-5">
                <h1 className="text-8xl font-semibold">{item.heading}</h1>
                <p className=" text-lg">{item.paragraph}</p>
                <Link className="btn btn-accent" href={"/products"}>
                  {item.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
