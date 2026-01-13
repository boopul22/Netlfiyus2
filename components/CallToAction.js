import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-24 bg-slate-950 text-center px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-6">We're Here When You Need Us Most</h2>
                <p className="text-slate-400 text-lg mb-10">
                    Don't face the insurance companies alone. Let our experts handle the claim while you focus on getting better.
                </p>
                <Link href="#claim" className="inline-flex items-center gap-2 px-8 py-4 bg-[#3182ce] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_30px_-5px_rgba(49,130,206,0.4)]">
                    Get Free Claim Now
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    )
}
