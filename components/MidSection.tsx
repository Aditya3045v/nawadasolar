import { Award, Users, TrendingUp, Clock, ShieldCheck, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MidSection() {
    const benefits = [
        {
            icon: <Award size={32} className="lg:w-10 lg:h-10" />,
            title: "Super Distributor",
            description: "Official North Bihar Super Distributorship for Waaree, Adani, Microtek, UTL, Luminous, and Tata Power Solar.",
            badge: "Authorized Dealer",
            color: "blue"
        },
        {
            icon: <Users size={32} className="lg:w-10 lg:h-10" />,
            title: "Trusted in North Bihar",
            description: "Serving households and businesses across Muzaffarpur, Begusarai, and surrounding districts with top-tier solar solutions.",
            badge: "Highly Trusted",
            color: "green"
        },
        {
            icon: <TrendingUp size={32} className="lg:w-10 lg:h-10" />,
            title: "300 Units Free Power",
            description: "Go solar and enjoy up to 300 units of free electricity every month with government-backed PM Surya Ghar Yojana.",
            badge: "Max ROI Guaranteed",
            color: "yellow"
        },
        {
            icon: <Clock size={32} className="lg:w-10 lg:h-10" />,
            title: "Rapid Installation",
            description: "Our expert team ensures site assessment to commissioning happens within the shortest possible turnaround time.",
            badge: "Fast Delivery",
            color: "purple"
        },
        {
            icon: <ShieldCheck size={32} className="lg:w-10 lg:h-10" />,
            title: "Vendor Empanelment",
            description: "Registered and empanelled vendor with NBPDCL & SBPDCL, ensuring smooth net metering and subsidy processing.",
            badge: "Govt Approve Vendor",
            color: "orange"
        },
        {
            icon: <Wrench size={32} className="lg:w-10 lg:h-10" />,
            title: "Dedicated Support",
            description: "Local presence in Muzaffarpur for quick maintenance, troubleshooting, and 24/7 technical assistance for all our customers.",
            badge: " Bablu Ji Service",
            color: "red"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-bg-deep to-[#0B1120]">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm lg:text-base mb-3 block">Why Balaji Traders</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8">
                        North Bihar&apos;s Super Solar <span className="text-gradient">Partner</span>
                    </h2>
                    <p className="text-slate-400 max-w-4xl mx-auto text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        As North Bihar&apos;s leading solar super distributor, we provide end-to-end solar solutions from consultation to installation and maintenance. Our expert team ensures maximum savings and seamless service.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-20 animate-fade-in-up">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 xl:p-12 hover:bg-white/10 transition-all group hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-${benefit.color}-500/20 rounded-2xl lg:rounded-3xl flex items-center justify-center text-${benefit.color}-400 mb-6 lg:mb-8 group-hover:scale-110 transition-transform border border-${benefit.color}-500/30`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">{benefit.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-4 lg:mb-6 text-base lg:text-lg">
                                {benefit.description}
                            </p>
                            <div className={`flex items-center gap-2 text-${benefit.color}-400 text-sm lg:text-base font-semibold`}>
                                <CheckCircle2 size={18} />
                                <span>{benefit.badge}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 lg:gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-primary hover:bg-primary-hover text-white font-bold text-base lg:text-lg xl:text-xl rounded-full transition-all shadow-glow-blue hover:scale-105"
                    >
                        Learn More About Us
                        <ArrowRight size={20} className="lg:w-6 lg:h-6" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
