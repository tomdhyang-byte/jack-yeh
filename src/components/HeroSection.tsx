"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
    formUrl: string;
}

export default function HeroSection({ formUrl }: HeroSectionProps) {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/portrait_with_background_suit.png"
                    alt="Strategy Consultant"
                    fill
                    className="object-cover object-[75%_center] lg:object-[0%_25%] lg:scale-110 lg:translate-x-24"
                    priority
                    sizes="100vw"
                />

                {/* Gradient Overlays for Immersive Blend */}
                {/* 1. Main Fade from Left (Dark Navy to Transparent) */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

                {/* 2. Bottom Fade (Seamless transition to next section) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent lg:from-slate-900 lg:via-slate-900/50" />

                {/* 3. Mobile Top-Left Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent lg:hidden" />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-left pt-20 lg:pt-0"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12 drop-shadow-lg tracking-wide">
                        不是更努力，
                        <br className="sm:hidden" />
                        <span className="sm:ml-2">而是找對方向</span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-10 max-w-lg lg:mx-0 drop-shadow-md font-medium">
                        從騰訊、Meta 到麥肯錫，再到 400 人企業 COO。<br className="hidden lg:block" />
                        我幫助高潛力工作者，看懂組織、做對關鍵決策，加速跨階層成長。
                    </p>

                    <div className="flex flex-col items-start gap-4">
                        <motion.a
                            href={formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.7)]"
                        >
                            👉 申請戰略診斷
                        </motion.a>

                        <p className="text-amber-400 text-sm font-semibold tracking-wide pl-2">
                            本月僅餘 5 個名額
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-3 bg-white/70 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
