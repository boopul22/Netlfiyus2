import { ClipboardCheck, FileText, Banknote } from 'lucide-react'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">How It Works    (3 Easy Steps)</h2>
                    <p className="text-slate-500 text-lg">We've simplified the process to get you the help you need without the stress.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Step 01 */}
                    <div className="group text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100">
                        <div className="mb-8 relative inline-block">
                            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <ClipboardCheck className="text-[#3182ce]" size={48} />
                            </div>
                            <span className="absolute -top-4 -right-4 w-10 h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold">01</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Start Your Free Review</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Fill out a quick form or call us—we’ll evaluate your accident and potential claim.
                        </p>
                    </div>

                    {/* Step 02 */}
                    <div className="group text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100">
                        <div className="mb-8 relative inline-block">
                            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <FileText className="text-[#3182ce]" size={48} />
                            </div>
                            <span className="absolute -top-4 -right-4 w-10 h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold">02</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">We Do the Work</h3>
                        <p className="text-slate-500 leading-relaxed">
                            From gathering documents to negotiating with insurers, our experts take care of it all.
                        </p>
                    </div>

                    {/* Step 03 */}
                    <div className="group text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-100">
                        <div className="mb-8 relative inline-block">
                            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Banknote className="text-[#3182ce]" size={48} />
                            </div>
                            <span className="absolute -top-4 -right-4 w-10 h-10 bg-[#3182ce] text-white rounded-full flex items-center justify-center font-bold">03</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">You Get Paid</h3>
                        <p className="text-slate-500 leading-relaxed">
                            After a successful settlement, you receive your payout—no hassle, no hidden fees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
