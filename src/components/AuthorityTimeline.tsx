"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        company: "Tencent",
        logo: "/images/logos/tencent.svg",
        description: "習得世界級產品思維",
    },
    {
        company: "Meta",
        logo: "/images/logos/meta.svg",
        description: "掌握數據驅動決策",
    },
    {
        company: "McKinsey",
        logo: "/images/logos/mckinsey.svg",
        description: "掌握結構化商業解題框架",
    },
    {
        company: "COO",
        logo: null,
        description: "400人團隊實戰操盤",
        isText: true,
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
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform -translate-y-1/2" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Logo/Icon container */}
                                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300">
                                    {exp.isText ? (
                                        <span className="text-2xl sm:text-3xl font-bold text-slate-700">
                                            COO
                                        </span>
                                    ) : (
                                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 logo-grayscale">
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
                                <p className="text-sm sm:text-base text-slate-600 text-center font-medium">
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
