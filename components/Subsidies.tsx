import { IndianRupee, FileText, CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function Subsidies() {
    return (
        <section id="subsidies" className="py-24 bg-bg-deep relative overflow-hidden border-t border-white/5">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-slate-300 font-medium text-sm mb-6 border border-white/10">
                        Government Initiatives
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Maximum Subsidy, <br />
                        <span className="text-primary">Zero Hassle</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Solar & Electrical Solutions handles the entire documentation and technical setup process for you. We ensure you get maximum efficiency and the best quality components for your investment in Nawada.
                    </p>
                </div>

                {/* Subsidy Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Residential Subsidy - Surya Ghar */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                                    <IndianRupee className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">PM Surya Ghar</h3>
                                    <p className="text-slate-400 text-sm">Residential Rooftop Scheme</p>
                                </div>
                            </div>
                            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 uppercase tracking-wider">
                                Active 2024
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">1 kW System Subsidy</span>
                                <span className="font-bold text-xl text-white">₹30,000</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">2 kW System Subsidy</span>
                                <span className="font-bold text-xl text-white">₹60,000</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">3 kW+ System Subsidy</span>
                                <span className="font-bold text-xl text-white">₹78,000</span>
                            </div>
                        </div>

                        <div className="bg-primary/10 rounded-xl p-5 border border-primary/20 flex items-center gap-4">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                            <div>
                                <p className="text-white font-semibold text-sm">Direct Bank Transfer</p>
                                <p className="text-xs text-slate-400 mt-1">Subsidy amount credited directly to your bank account within 30 days of installation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Agricultural Subsidy - KUSUM */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-white/10 hover:border-accent-green/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-accent-green/20 to-accent-green/10 rounded-2xl flex items-center justify-center border border-accent-green/20">
                                    <Users className="w-7 h-7 text-accent-green" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">PM-KUSUM</h3>
                                    <p className="text-slate-400 text-sm">Solar Pump Scheme</p>
                                </div>
                            </div>
                            <div className="bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-xs font-bold border border-accent-green/20 uppercase tracking-wider">
                                For Farmers
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">Central Govt Share</span>
                                <span className="font-bold text-xl text-white">30%</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">State Govt Share</span>
                                <span className="font-bold text-xl text-white">30%</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-slate-300">Bank Loan</span>
                                <span className="font-bold text-xl text-white">30%</span>
                            </div>
                        </div>

                        <div className="bg-accent-green/10 rounded-xl p-5 border border-accent-green/20 flex items-center gap-4">
                            <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                            <div>
                                <p className="text-white font-semibold text-sm">90% Cost Covered</p>
                                <p className="text-xs text-slate-400 mt-1">Farmers only need to pay 10% of the total cost upfront.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
