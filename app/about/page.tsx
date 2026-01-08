import { Building, Award, Users, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Solar & Electrical Solutions | Expert Services in Nawada',
    description: 'Solar & Electrical Solutions in Nawada is your premier partner for Solar Panels, Professional Wiring, Inverters, and Lights in Nawada, Bihar.',
    keywords: 'about solar solutions nawada, solar company nawada, electrical wiring nawada, inverter dealer nawada, solar installer nawada',
    openGraph: {
        title: 'About Solar & Electrical Solutions - Solar & Electrical Experts in Nawada',
        description: 'Providing top-tier solar and electrical services in Nawada with high-quality products and expert installation.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://nawadasolar.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-bg-deep min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Empowering Nawada with <span className="text-primary">Clean Energy</span></h1>
                    <p className="text-xl text-slate-400">Solar & Electrical Solutions is a premier service provider for solar and electrical needs, serving Nawada and surrounding regions in Bihar.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Building className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-slate-400">To provide high-quality solar and electrical solutions that are reliable, affordable, and sustainable for every home and business in Nawada.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Award className="w-12 h-12 text-accent-green mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
                        <p className="text-slate-400">We offer top-tier Solar Panels, Inverters, and professional Wiring services, ensuring all installations meet the highest safety standards.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Users className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                        <p className="text-slate-400">Our team consists of certified electricians and solar experts dedicated to providing professional services in Nawada.</p>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Specialized Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "High-Efficiency Solar Panel Installation",
                            "Professional Residential & Commercial Wiring",
                            "Advanced Inverter and Battery Solutions",
                            "Modern Lighting Systems & Setup",
                            "Local Support in Nawada & Surroundings",
                            "Complete Maintenance & Electrical Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
