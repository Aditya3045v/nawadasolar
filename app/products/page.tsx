export default function Products() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Products</h1>
                <p className="text-xl text-gray-600 mb-16">Innovative renewable energy solutions for every need.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Solar Panels", desc: "High-efficiency photovoltaic systems" },
                        { name: "Wind Turbines", desc: "Residential & commercial wind power" },
                        { name: "Battery Storage", desc: "Store your renewable energy" },
                        { name: "EV Chargers", desc: "Fast charging for electric vehicles" },
                        { name: "Inverters", desc: "Convert DC to AC power efficiently" },
                        { name: "Smart Controllers", desc: "AI-powered energy management" }
                    ].map((product, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600">{product.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
