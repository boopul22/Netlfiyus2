import { FileEdit, Briefcase, Banknote } from 'lucide-react'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">How It Works</h2>
                    <p className="text-slate-500">We've simplified the process to get you the help you need without the stress.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 01 */}
                    <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="text-8xl font-bold text-slate-900">1</span>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#3182ce] mb-6 group-hover:scale-110 transition-transform">
                            <FileEdit size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Start Your Free Review</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Fill out a quick form or call us—we'll evaluate your accident details and potential claim value immediately.
                        </p>
                    </div>

                    {/* Step 02 */}
                    <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="text-8xl font-bold text-slate-900">2</span>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#3182ce] mb-6 group-hover:scale-110 transition-transform">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">We Do the Work</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            From gathering police reports and medical documents to negotiating with insurers, our experts take care of it all.
                        </p>
                    </div>

                    {/* Step 03 */}
                    <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="text-8xl font-bold text-slate-900">3</span>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#3182ce] mb-6 group-hover:scale-110 transition-transform">
                            <Banknote size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">You Get Paid</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            After a successful settlement, you receive your payout directly. No hassle, no hidden fees, and no stress.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
