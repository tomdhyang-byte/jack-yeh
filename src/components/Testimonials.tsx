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
];

export default function Testimonials() {
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
                        他們這樣說
                    </h2>
                    <p className="text-slate-500 text-lg">
                        來自各行業專業人士的真實回饋
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative bg-slate-50 rounded-2xl p-8 sm:p-10"
                        >
                            {/* Quote icon background */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200" />

                            {/* Quote text */}
                            <p className="relative text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                                「{testimonial.quote}」
                            </p>

                            {/* Author info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
