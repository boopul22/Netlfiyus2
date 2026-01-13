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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3182ce] text-xs font-medium mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-[#3182ce]"></span>
                        24/7 Emergency Support Available
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        Injured in a Car Accident? <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">We're Here to Help.</span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                        Get expert help to claim compensation for repairs, medical bills, and lost wages. We handle the paperwork so you can focus on recovery. No fees unless you win.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#claim" className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-white bg-[#3182ce] rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_20px_-5px_rgba(49,130,206,0.5)]">
                            Free Claim Review
                            <ArrowRight className="ml-2" size={16} />
                        </Link>
                        <a href="tel:8884080938" className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-slate-200 border border-slate-700 rounded-lg hover:bg-white/5 transition-all">
                            <PhoneCall className="mr-2" size={16} />
                            Call 888.408.0938
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-slate-400 text-xs">
                        <div className="flex -space-x-2">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" className="w-8 h-8 rounded-full border-2 border-[#1a365d]" alt="User" />
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" className="w-8 h-8 rounded-full border-2 border-[#1a365d]" alt="User" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" className="w-8 h-8 rounded-full border-2 border-[#1a365d]" alt="User" />
                        </div>
                        <p>Trusted by 2,000+ clients this year</p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative hidden lg:block">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="Car accident assistance" className="w-full h-full object-cover opacity-90" />
                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Verified Coverage</p>
                                <p className="text-xs text-slate-500">We verify your insurance policy instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(146%+1.3px)] h-16 sm:h-24 fill-white">
                    <path d="M985.66,92.83C906.67,72,823.78,31,432.84,2c-47.52-3.53-96.65-4.46-146.53-3.08-37.48,1.04-74.95,2.06-112.41,3.09L173.9,2h0L3.1,2v99.85h1196.9V93.63C1161.4,103.11,1088.61,118.84,985.66,92.83Z" className="opacity-100"></path>
                </svg>
            </div>
        </section>
    )
}
