"use client";

import Image from "next/image";
import { motion } from "framer-motion";



export default function Services() {
    return(
    <section id="services" className="py-16 bg-[#FFF7F1]">
        
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className=" w-full md:w-[520px] text-left  text-3xl md:text-[32px] font-bold text-gray-900 mb-4">
                    Our Astrology Services -
                    Unlock The Secrets of Your Life!
                </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* card grid  */}
                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    
                <motion.span
          className="w-8 h-8 mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    </motion.span>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>

                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>
                <div className="px-5 py-6 rounded-2xl flex flex-col bg-white hover:shadow-orange-50 cursor-pointer transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src={"/images/kundli-gengration.svg"}
                        alt="kundligentation"
                        width={46}
                        height={46}
                        className="mb-4"
                    />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Free Kundli Generation</h3>
                            <p>Personalized birth chart with detailed analysis!</p>
                        </div>

                        <span className="w-8 h-8 mb-2">
                            <Image
                                src={"/images/arrow-right.svg"}
                                alt="arrow-right"
                                width={32}
                                height={32}
                            />
                        </span>
                    </div>
                </div>

            </div>

</div>

       
    </section>
    )
}