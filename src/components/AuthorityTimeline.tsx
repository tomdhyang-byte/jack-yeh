"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        year: "2016 - 2020",
        company: "Tencent",
        logo: "/images/logos/tencent.svg",
        description: "在亞洲最大科技公司之一，\n深入理解「世界級產品與組織如何規模化」。",
    },
    {
        year: "2020 - 2022",
        company: "Meta",
        logo: "/images/logos/meta.svg",
        description: "在高度數據驅動的環境中，\n學會如何用決策品質，\n拉開個人與團隊差距。",
    },
    {
        year: "2022 - 2024",
        company: "McKinsey",
        logo: "/images/logos/mckinsey.svg",
        description: "作為顧問與面試官，\n參與頂尖人才的篩選、評估與升級。",
    },
    {
        company: "知名\n金融科技公司",
        logo: null,
        description: "現在，我站在企業「配置資源與押注人才」的位置，\n每天都在做取捨與判斷。",
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
                        你職涯的下一個關鍵決策，值得更高階的視角
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto whitespace-pre-line">
                        從 McKinsey、Meta、Tencent 到 COO{"\n"}我幫助專業工作者做出真正拉開差距的職涯選擇
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
                                {exp.year && (
                                    <div className="mb-4 text-center">
                                        <span className="text-lg font-bold text-slate-800 tracking-tight block">
                                            {exp.year}
                                        </span>
                                    </div>
                                )}
                                {!exp.year && (
                                    <div className="mb-4 text-center opacity-0 select-none">
                                        <span className="text-lg font-bold text-slate-800 tracking-tight block">
                                            Present
                                        </span>
                                    </div>
                                )}

                                {/* Logo/Icon container */}
                                <div className="relative z-10 w-32 h-20 sm:w-40 sm:h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl px-4">
                                    {exp.logo ? (
                                        <div className="relative w-full h-full p-2">
                                            <Image
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-sm sm:text-base font-bold text-slate-900 text-center leading-snug whitespace-pre-line">
                                            {exp.company}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-slate-600 text-center font-medium max-w-[200px] leading-relaxed whitespace-pre-line">
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
