import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">Start Your Claim Today</h2>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a365d] mb-4 sm:mb-6">Helping You Reclaim What You Deserve After a Car Accident</h3>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        If you've been injured in a car accident, we’re here to ensure you receive maximum compensation. Whether it’s damage, medical bills, or lost income — we simplify the claim process and fight for your rights so you can focus on recovery.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                    {[
                        {
                            title: 'Fast & Free Claim Assessment',
                            desc: "Know your claim's worth in minutes. No fees, no pressure — just straight answers from experts."
                        },
                        {
                            title: 'Car Accident Claim Specialists',
                            desc: "From minor fender-benders to serious injuries, we’ve helped thousands get compensated — and we can help you too."
                        },
                        {
                            title: 'No Win, No Fee Guarantee',
                            desc: "You only pay when we win your case. That’s how confident we are in securing your rightful compensation."
                        },
                        {
                            title: '24/7 Support & Case Updates',
                            desc: "Accidents don’t follow a schedule. Our team is available around the clock to answer your questions and update your case."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-5 sm:p-6 lg:p-8 xl:p-10 rounded-2xl lg:rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start gap-4 sm:gap-6 hover:shadow-xl transition-all">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                <CheckCircle2 className="text-[#3182ce] w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{feature.title}</h4>
                                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 sm:mt-16 text-center">
                    <Link href="/contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#3182ce] text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg text-sm sm:text-base">
                        Get Started Free
                    </Link>
                </div>
            </div>
        </section>
    )
}
