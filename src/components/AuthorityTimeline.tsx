"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        year: "2016 - 2020",
        company: "Tencent",
        logo: "/images/logos/tencent.svg",
        description: "習得世界級產品思維",
    },
    {
        year: "2020 - 2022",
        company: "Meta",
        logo: "/images/logos/meta.svg",
        description: "掌握數據驅動決策",
    },
    {
        year: "2022 - 2024",
        company: "McKinsey",
        logo: "/images/logos/mckinsey.svg",
        description: "掌握結構化商業解題框架",
    },
    {
        company: "CMoney",
        logo: null,
        description: "擔任COO，帶領400人團隊",
        isText: true,
        isCMoney: true,
    },
];

export default function AuthorityTimeline() {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        從矽谷到亞洲，從理論到實戰
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        跨越全球頂尖科技公司與顧問機構的實戰經驗
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection line - desktop */}
                    {/* Positioned behind the cards, vertically centered relative to the LOGO card (which is approx ~96px + margins) */}
                    {/* We need to adjust top position to match the new layout structure: Year + Spacing + Logo Center */}
                    <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-4">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center group"
                            >
                                {/* Year Range */}
                                <div className="mb-4 text-center">
                                    <span className="text-lg font-bold text-slate-800 tracking-tight block">
                                        {exp.year}
                                    </span>
                                </div>

                                {/* Logo/Icon container */}
                                <div className="relative z-10 w-32 h-20 sm:w-40 sm:h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl px-4">
                                    {exp.isText ? (
                                        <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                            {
                                                /* @ts-ignore - simplified for this component */
                                                exp.isCMoney ? (
                                                    <>
                                                        <span className="text-red-600">CM</span>oney
                                                    </>
                                                ) : (
                                                    exp.company
                                                )
                                            }
                                        </span>
                                    ) : (
                                        <div className="relative w-full h-full p-2">
                                            <Image
                                                src={exp.logo!}
                                                alt={`${exp.company} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-slate-600 text-center font-medium max-w-[200px] leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
