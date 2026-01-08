'use client';

import Image from 'next/image';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Solar Rooftop Installation in Bihar"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Desktop: Blue Gradient Overlay */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-[#1e88e5]/60 via-[#42a5f5]/40 to-[#64b5f6]/30 z-10" />

                {/* Mobile: Dark Gradient Overlay */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20 z-10" />
                <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/95 z-10" />
            </div>

            {/* DESKTOP VIEW - Centered Layout (lg and up) */}
            <div className="hidden lg:flex relative z-20 w-full h-full items-center justify-center">
                <div className="text-center">
                    {/* Large Centered Title */}
                    <h1 className="text-8xl xl:text-9xl 2xl:text-[12rem] font-bold tracking-tight text-white leading-[0.9] drop-shadow-2xl mb-12 animate-fade-in-up">
                        SOLAR &<br />
                        ELECTRICAL
                    </h1>

                    {/* Clean Capsule Button */}
                    <div>
                        <Link
                            href="#calculator"
                            className="inline-flex items-center gap-3 px-10 py-4 xl:px-12 xl:py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg xl:text-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <Calculator className="w-6 h-6" />
                            Calculate Your Savings
                        </Link>
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW - Card Layout (below lg) */}
            <div className="lg:hidden relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 gap-16 items-center">

                    {/* Mobile: Text & CTAs */}
                    <div className="flex flex-col gap-6 max-w-3xl animate-fade-in-up">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs md:text-sm font-medium text-green-300 tracking-wide uppercase">Expert Services in Nawada</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-2xl">
                            SOLAR & ELECTRICAL<br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
                                SOLUTIONS IN NAWADA
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                            High-quality <span className="font-bold text-white">Solar Panels, Inverters, & Professional Wiring</span>.
                            Your local experts for energy-efficient homes and stable electrical infrastructure in Nawada.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href="/contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base sm:text-lg transition-all shadow-glow-blue hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Get Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#calculator"
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-base sm:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Calculator className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                                Calculate Savings
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm font-medium text-slate-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                                <span>Certified Safe Wiring</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                                <span>Premium Solar Panels</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                                <span>Quick Support in Nawada</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
