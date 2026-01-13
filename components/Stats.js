import { BadgeCheck, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Stats() {
    return (
        <section className="py-12 bg-[#1a365d] border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-500/20 rounded-full text-green-400 border border-green-500/30">
                            <BadgeCheck size={28} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-xl tracking-tight">98% Success Rate</h3>
                            <p className="text-slate-400 text-sm">For qualifying accident claims</p>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 border border-blue-500/30">
                            <Clock size={28} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-xl tracking-tight">Fast Response</h3>
                            <p className="text-slate-400 text-sm">Claims reviewed within 24 hours</p>
                        </div>
                    </div>

                    <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden lg:block">
                            <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">Help Desk 24/7</p>
                            <p className="text-white font-semibold text-lg">888.408.0938</p>
                        </div>
                        <Link href="#claim" className="bg-[#3182ce] hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/50 whitespace-nowrap">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
