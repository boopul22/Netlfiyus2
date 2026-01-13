import { BadgeCheck, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Stats() {
    return (
        <section className="py-8 sm:py-12 bg-[#1a365d] border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                    <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
                        <div className="p-2.5 sm:p-3 bg-green-500/20 rounded-full text-green-400 border border-green-500/30">
                            <BadgeCheck size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight">100% Success Rate</h3>
                            <p className="text-slate-400 text-xs sm:text-sm">For qualifying accident claims</p>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>

                    <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
                        <div className="p-2.5 sm:p-3 bg-blue-500/20 rounded-full text-blue-400 border border-blue-500/30">
                            <Clock size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg sm:text-xl tracking-tight">Fast Response</h3>
                            <p className="text-slate-400 text-xs sm:text-sm">Claims reviewed within 24 hours</p>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        <div className="text-center sm:text-right hidden sm:block">
                            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Help Desk 24/7</p>
                            <p className="text-white font-bold text-lg sm:text-xl">888 408 0938</p>
                        </div>
                        <Link href="/contact" className="w-full sm:w-auto bg-[#3182ce] hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-blue-900/50 whitespace-nowrap text-center">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
