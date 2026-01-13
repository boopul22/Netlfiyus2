import { Scale, Headphones } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Helping You Reclaim What You Deserve</h2>
                        <p className="text-slate-600 text-lg">We combine legal expertise with compassionate support to ensure maximum compensation for your suffering and losses.</p>
                    </div>
                    <Link href="#claim" className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:border-[#3182ce] hover:text-[#3182ce] transition-colors shadow-sm">
                        Get Started Free
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-6">
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                            <Scale size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">No Win, No Fee Guarantee</h3>
                            <p className="text-slate-500 leading-relaxed">
                                You only pay when we win your case. That's how confident we are in securing your rightful compensation. There are zero upfront costs to you.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-6">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Headphones size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">24/7 Support &amp; Case Updates</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Accidents don't follow a schedule. Our team is available around the clock to answer your questions and update you on the progress of your claim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
