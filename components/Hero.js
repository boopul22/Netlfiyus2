import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#1a365d] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3182ce] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-semibold mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        24/7 Expert Support Available
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                        Injured in a Car Accident? <br className="hidden lg:block" />
                        <span className="text-blue-400">We’re Here to Help.</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                        Get expert help to claim compensation for repairs, medical bills, and lost wages. No fees unless you win.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#3182ce] rounded-xl hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                            Free Claim Review
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <a href="tel:8884080938" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white border-2 border-slate-700 rounded-xl hover:bg-white/5 transition-all">
                            <PhoneCall className="mr-2" size={20} />
                            Call : 888 408 0938
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="text-blue-400" size={24} />
                            <span className="text-sm font-medium">100% Risk Free</span>
                        </div>
                        <div className="w-px h-4 bg-slate-700"></div>
                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="text-blue-400" size={24} />
                            <span className="text-sm font-medium">Expert Legal Team</span>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                        <img
                            src="https://auto-file-claim.com/wp-content/uploads/2025/12/2148958842.jpg"
                            alt="Car accident assistance"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay elements from mockup could go here if needed */}
                    </div>
                    {/* Decorative element from mockup */}
                    <img
                        src="https://auto-file-claim.com/wp-content/uploads/2025/06/car-insurance.png"
                        alt="Background element"
                        className="absolute -bottom-10 -left-10 w-48 h-48 object-contain hidden lg:block animate-bounce-slow"
                        style={{ animationDuration: '4s' }}
                    />
                </div>
            </div>

        </section>
    )
}
