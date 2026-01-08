"use client";

import { motion } from "framer-motion";

interface FooterCTAProps {
    formUrl: string;
}

export default function FooterCTA({ formUrl }: FooterCTAProps) {
    return (
        <section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                        你的時間很寶貴，
                        <br className="hidden sm:block" />
                        別讓「試錯成本」吃掉你的未來。
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        本月諮詢名額優先開放給演講現場聽眾，額滿即止。
                    </p>

                    <motion.a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center px-10 py-5 text-lg sm:text-xl font-bold text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25"
                    >
                        👉 立即填寫申請表
                    </motion.a>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="relative mt-20 pt-8 border-t border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-slate-500 text-sm">
                        © {new Date().getFullYear()} Strategy Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
