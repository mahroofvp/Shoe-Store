import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash"
const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage:4,
    perMove:1,
    autoplay: true,
    pauseOnHover:true,
    interval: 1500,
    type: 'loop',
    rewind: true,
    keyboard:'global',
    gap:'1rem',
    pagination: false,
    padding:'2rem',
    breakpoints: {
      1200: { perPage: 3},
      991: { perPage: 2.3},
      768: { perPage: 2},
      500: {perPage: 1.3},
      425: { perPage: 1}
    },
  }
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className=" mb-0.5  rounded-xl py-4 px-5  transition-all duration-700 ease-in-out hover:scale-105 ">
                <div
                  className="relative grid items-center gap-4 pb-2
                   rounded-lg shadow shadow-slate-200ring-1 ring-slate-200"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className=" w-full h-auto object-cover shadow-md
                             shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600 " />
                      <span className="text-xs font-bold text-blue-600">{val.by}</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4" >
                    <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{truncate(val.text, {length: 175})}</p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a href={val.url} target="_blank" role={"button"} className=" w-full bg-gradient-to-b from-slate-900
                     to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme ">{val.btn}</a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;