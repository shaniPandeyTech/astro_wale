'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const testimonials = [
    {
        id: 1,
        title: "Our Trusted Partners",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 2,
        title: "Loan Approval Within 30 Minutes",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 3,
        title: "Assured Warranty",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 4,
        title: "Quality Checks",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 5,
        title: "Our Trusted Partners",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 6,
        title: "Loan Approval Within 30 Minutes",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 7,
        title: "Assured Warranty",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    },
    {
        id: 8,
        title: "Quality Checks",
        image: "/images/rajpal.jpg",
        playIcon: "/images/youtube-icon.png",
    }
];

const CelebrityClients = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const end = startIndex + visibleCount;
        return testimonials.slice(startIndex, end).concat(
            end > testimonials.length ? testimonials.slice(0, end - testimonials.length) : []
        );
    };

    return (
        <section className="py-12 bg-[#FFF7F1] border-b">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    What Our Customers Say About Horoscope Vale
                </h2>

                <div className="relative">


                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center px-20 p">
                        {getVisibleTestimonials().map((item) => (


                            <div key={item.id} className="w-1/4 flex-shrink-0 mx-2 ">
                                <div className='bg-[#EF6800] rounded-2xl'>
                                    <div className='relative'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={345}
                                        height={455}
                                        className="w-full  object-cover"
                                    />

<Image
                                        src={item.playIcon}
                                        alt={item.title}
                                        width={62}
                                        height={62}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 cursor-pointer -ml-8 -mt-8"
                                    />

</div>

                                    <div className="p-4">
                                        <p className="text-white font-medium italic py-1">Horoscope Vale's astrological insights have been truly enlightening. Their predictions and remedies are accurate and deeply rooted in Vedic wisdom!</p>

                                        <p className="text-white font-semibold my-2">-Rajpal Yadav</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        <button onClick={prevSlide} className="absolute  items-center justify-center top-1/2 -left-4 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
                            ❮
                        </button>
                        <button onClick={nextSlide} className="absolute  items-center justify-center top-1/2 -right-4 transform -translate-y-1/2  bg-black/50 text-black bg-white rounded-2xl w-8 h-36 flex ">
                            ❯
                        </button>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default CelebrityClients;