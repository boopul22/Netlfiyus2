import { Star, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Trust() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

                <div className="order-2 lg:order-1 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 aspect-square">
                        <img src="https://auto-file-claim.com/wp-content/uploads/2025/06/2148270686-1.jpg" alt="Expert legal team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex -space-x-1 text-yellow-400">
                                <Star size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                                <Star size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                                <Star size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                                <Star size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                                <Star size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-slate-900">5.0 Rating</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-green-50 text-green-600 text-xs sm:text-sm font-bold mb-4 border border-green-100">
                        100% Success Rate
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8">Your Trusted Car Accident Claim Experts</h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                        we specialize in fighting for victims of car accidents—because you deserve justice, not just a settlement. Whether you're facing vehicle repairs, lost wages, or insurance pushback, our experienced legal team is here to guide you every step of the way.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                        {[
                            'Specialized Expertise',
                            'Zero Upfront Costs',
                            'Local & Trusted',
                            'Fast & Responsive'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                                <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                                <span className="font-semibold text-slate-700 text-sm sm:text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6">
                        <Link href="/file-your-claim-today" className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
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
