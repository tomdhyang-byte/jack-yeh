"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "原本卡在業績瓶頸，老師用一小時幫我釐清問題本質，重新設計銷售策略。下個季度直接晉升。",
        author: "某外商科技原廠",
        role: "資深客戶經理",
    },
    {
        quote:
            "老師用麥肯錫框架幫我梳理複雜的跨部門專案，找到關鍵利害關係人。一個月內專案過關。",
        author: "本土大型金控",
        role: "專案副理",
    },
    {
        quote:
            "從 0 到 1 打造產品團隊是最難的。Jack 的經驗幫我們避開了很多組織擴張的坑，建立了健康的工程文化。",
        author: "SaaS 新創",
        role: "共同創辦人 & CTO",
    },
    {
        quote:
            "面對轉型期的陣痛，這裡提供的不是空泛的理論，而是能直接落地的實戰劇本。非常推薦給需要在亂局中做決策的管理者。",
        author: "傳產製造業",
        role: "二代接班人",
    },
    {
        quote:
            "對於剛升任主管的我來說，這是一堂含金量極高的領導力課程。讓我學會如何從執行者思維切換到管理者思維。",
        author: "知名電商平台",
        role: "技術總監",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        他們這樣說
                    </h2>
                    <p className="text-slate-500 text-lg">
                        來自各行業專業人士的真實回饋
                    </p>
                </motion.div>

                <div className="relative w-full">
                    {/* Gradient Masks for smooth fade out */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex overflow-hidden mask-image-linear-to-r hover:cursor-grab active:cursor-grabbing">
                        <div className="flex gap-6 sm:gap-8 flex-nowrap animate-marquee hover:pause">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 w-[350px] sm:w-[450px] bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100"
                                >
                                    {/* Quote icon background */}
                                    <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200" />

                                    {/* Quote text */}
                                    <p className="relative text-lg text-slate-700 leading-relaxed mb-6 font-medium line-clamp-4">
                                        「{testimonial.quote}」
                                    </p>

                                    {/* Author info */}
                                    <div className="flex items-center gap-3 mt-auto">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-sm">
                                                {testimonial.author[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-slate-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
