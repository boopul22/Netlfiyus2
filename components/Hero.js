import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-28 bg-[#1a365d] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3182ce] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        24/7 Expert Support Available
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8">
                        Injured in a Car Accident? <br className="hidden lg:block" />
                        <span className="text-blue-400">We're Here to Help.</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                        Get expert help to claim compensation for repairs, medical bills, and lost wages. No fees unless you win.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                        <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#3182ce] rounded-xl hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                            Free Claim Review
                            <ArrowRight className="ml-2" size={18} />
                        </Link>
                        <a href="tel:8884080938" className="inline-flex justify-center items-center px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white border-2 border-slate-700 rounded-xl hover:bg-white/5 transition-all">
                            <PhoneCall className="mr-2" size={18} />
                            Call: 888 408 0938
                        </a>
                    </div>

                    <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="text-blue-400 shrink-0" size={20} />
                            <span className="text-xs sm:text-sm font-medium">100% Risk Free</span>
                        </div>
                        <div className="w-px h-4 bg-slate-700 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="text-blue-400 shrink-0" size={20} />
                            <span className="text-xs sm:text-sm font-medium">Expert Legal Team</span>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                        <img
                            src="https://auto-file-claim.com/wp-content/uploads/2025/12/2148958842.jpg"
                            alt="Car accident assistance"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
