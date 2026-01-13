import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-center px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-4 sm:mb-6">We're Here When You Need Us Most</h2>
                <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-10">
                    Don't face the insurance companies alone. Let our experts handle the claim while you focus on getting better.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#3182ce] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_30px_-5px_rgba(49,130,206,0.4)] text-sm sm:text-base">
                    Get Free Claim Now
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </Link>
            </div>
        </section>
    )
}
