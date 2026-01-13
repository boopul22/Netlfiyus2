import { ClipboardCheck, FileText, Banknote } from 'lucide-react'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">How It Works (3 Easy Steps)</h2>
                    <p className="text-slate-500 text-base sm:text-lg">We've simplified the process to get you the help you need without the stress.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {/* Step 01 */}
                    <div className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100">
                        <div className="mb-6 sm:mb-8 relative inline-block">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <ClipboardCheck className="text-[#3182ce] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">01</span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Start Your Free Review</h3>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            Fill out a quick form or call us—we'll evaluate your accident and potential claim.
                        </p>
                    </div>

                    {/* Step 02 */}
                    <div className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100">
                        <div className="mb-6 sm:mb-8 relative inline-block">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <FileText className="text-[#3182ce] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">02</span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">We Do the Work</h3>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            From gathering documents to negotiating with insurers, our experts take care of it all.
                        </p>
                    </div>

                    {/* Step 03 */}
                    <div className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100 sm:col-span-2 md:col-span-1">
                        <div className="mb-6 sm:mb-8 relative inline-block">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Banknote className="text-[#3182ce] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <span className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">03</span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">You Get Paid</h3>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            After a successful settlement, you receive your payout—no hassle, no hidden fees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
