import { Star, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Trust() {
    return (
        <section className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                <div className="order-2 lg:order-1 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                        <img src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="Expert inspection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Your Trusted Car Accident Claim Experts</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Navigating insurance claims after an accident can be overwhelming. Insurance companies often try to minimize payouts. We specialize in fighting for car accident victims to ensure you get every penny you deserve.
                    </p>
                    <ul class="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 min-w-[20px] text-[#3182ce]">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="text-slate-600">Specialized legal and claim support team</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 min-w-[20px] text-[#3182ce]">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="text-slate-600">Over $50M recovered for our clients</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 min-w-[20px] text-[#3182ce]">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="text-slate-600">Direct negotiation with insurance providers</span>
                        </li>
                    </ul>
                    <Link href="#claim" className="text-[#3182ce] font-medium hover:text-blue-700 inline-flex items-center gap-1 group">
                        Learn about our process
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
