"use client";

import { Autoplay, Pagination, Navigation, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import Image from "next/image";

export default function ImageScroller({
  title,
  images,
  image_class,
}: {
  title: string;
  images: string[];
  image_class?: string;
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden transition-transform duration-500"
        loop={images.length > 1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation, Zoom]}
        slidesPerView={1}
        spaceBetween={20}
        zoom={true}
        lazyPreloadPrevNext={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="swiper-zoom-container w-full h-full">
              <Image
                src={img}
                alt={title}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className={`${image_class} object-cover object-center`}
                sizes="(max-width: 768px) 100vw, 600px"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
