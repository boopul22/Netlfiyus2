import { Star, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Trust() {
    return (
        <section className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                <div className="order-2 lg:order-1 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 aspect-square">
                        <img src="https://auto-file-claim.com/wp-content/uploads/2025/06/2148270686-1.jpg" alt="Expert legal team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-1 text-yellow-400">
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                            </div>
                            <span className="text-sm font-semibold text-slate-900">5.0 Rating</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-bold mb-4 border border-green-100">
                        100% Success Rate
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-8">Your Trusted Car Accident Claim Experts</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        we specialize in fighting for victims of car accidents—because you deserve justice, not just a settlement. Whether you're facing vehicle repairs, lost wages, or insurance pushback, our experienced legal team is here to guide you every step of the way.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {[
                            'Specialized Expertise',
                            'Zero Upfront Costs',
                            'Local & Trusted',
                            'Fast & Responsive'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <CheckCircle2 className="text-blue-500" size={20} />
                                <span className="font-semibold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/file-your-claim-today" className="px-8 py-4 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                            Get Started
                        </Link>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 font-medium">Help Desk 24/7</span>
                            <span className="text-lg font-bold text-[#1a365d]">888 408 0938</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
