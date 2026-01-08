"use client";

import { motion } from "framer-motion";
import { Trophy, BrainCircuit, Rocket } from "lucide-react";

const services = [
    {
        icon: Trophy,
        title: "高階職涯策略",
        description:
            "針對晉升瓶頸的中階主管。用 Hiring Manager 視角重新設計你的職涯賽道。",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: BrainCircuit,
        title: "商業難題拆解",
        description:
            "當局者迷，用麥肯錫的 Problem Solving 框架幫你拆解變因，找出只需 20% 力氣的破局點。",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: Rocket,
        title: "企業/團隊增長",
        description:
            "分享驗證過的規模化劇本。檢視 GTM 策略與組織管理盲點。",
        gradient: "from-emerald-500 to-teal-600",
    },
];

export default function ServiceCards() {
    return (
        <section className="py-20 sm:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        一小時，租用我的「麥肯錫大腦」
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        精準聚焦，解決你最棘手的問題
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover gradient border effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
