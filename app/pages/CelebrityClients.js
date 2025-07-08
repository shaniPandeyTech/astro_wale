'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const CelebrityClients = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [testimonials, setTestimonialsData] = useState([]);
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

    useEffect(() => {
        fetch('https://api.indiandetectiveservices.com/public/api/v1/reviews')
            .then(res => res.json())
            .then(resData => {
                if (resData.success === 1 && Array.isArray(resData.data)) {
                    setTestimonialsData(resData.data); // ✅ store only data array
                } else {
                    console.error('API call successful but data missing');
                }
            })
            .catch(err => {
                console.error('Error fetching astrologerss:', err);
            });
    }, []);

    return (
        <section className="py-12 bg-[#FFF7F1] border-b">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    What Our Customers Say About Horoscope Vale
                </h2>

                <div className="relative">


                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center px-20 p h-[600px]">
                        {getVisibleTestimonials().map((item) => (


                            <div key={item.id} className="w-1/4 flex-shrink-0 mx-2 ">
                                <div className='bg-[#EF6800] rounded-2xl'>
                                    <div className='relative'>
                                        <Image
                                            src={item.youtube_lik}
                                            alt={item.title}
                                            width={345}
                                            height={455}
                                            className="w-full  object-cover"
                                        />

                                        <Image
                                            src="/images/youtube-icon.png"
                                            alt={item.title}
                                            width={62}
                                            height={62}
                                            className="absolute top-1/2 left-1/2 w-16 h-16 cursor-pointer -ml-8 -mt-8"
                                        />

                                    </div>
                                    
                                    <div className="p-4">
                                        <p className="text-white font-medium italic py-1"> {item.comment.length > 80
                                            ? `${item.comment.slice(0, 80)}...`
                                            : item.comment}</p>

                                        <p className="text-white font-semibold my-2">-{item.name},{item.city}</p>
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