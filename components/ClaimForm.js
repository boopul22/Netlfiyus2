import { Shield, Zap, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function ClaimForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        try {
            await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
            setSubmitted(true)
        } catch (error) {
            console.error('Form submission error:', error)
        }
    }

    return (
        <section id="claim" className="bg-[#1a365d] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-[#1a365d] hidden lg:block"></div>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-slate-50/5 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left Content */}
                    <div className="text-white pt-0 lg:pt-8">
                        <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-4 sm:mb-6 border border-blue-500/20">
                            Fast Track Process
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Start Your Claim Today</h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                            Don't let the insurance companies delay your payment. Fill out the form to speak with a claim specialist instantly.
                        </p>

                        <div className="space-y-4 sm:space-y-6 mb-8 lg:mb-0">
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-[#3182ce] shrink-0">
                                    <Shield size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm sm:text-base">Secure &amp; Confidential</h4>
                                    <p className="text-xs sm:text-sm text-slate-400 mt-1">Your information is encrypted and never shared without consent.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 items-start">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-[#3182ce] shrink-0">
                                    <Zap size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm sm:text-base">Instant Review</h4>
                                    <p className="text-xs sm:text-sm text-slate-400 mt-1">Our AI-assisted team reviews submissions in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl border border-slate-100">
                        {submitted ? (
                            <div className="text-center py-10 sm:py-12">
                                <CheckCircle size={48} className="sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                                <p className="text-sm sm:text-base text-slate-600">We've received your claim. Our team will contact you shortly.</p>
                            </div>
                        ) : (
                            <form
                                name="claim-form"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-5"
                            >
                                <input type="hidden" name="form-name" value="claim-form" />
                                <p className="hidden">
                                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                                </p>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Name</label>
                                    <input type="text" name="name" required placeholder="John Doe" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone</label>
                                        <input type="tel" name="phone" required placeholder="(555) 000-0000" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
                                        <input type="email" name="email" required placeholder="john@example.com" className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accident Details <span className="text-slate-400 font-normal normal-case">(Optional)</span></label>
                                    <textarea rows="3" name="details" placeholder="Briefly describe what happened..." className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400 resize-none"></textarea>
                                </div>

                                <div className="flex items-start gap-2 mb-4">
                                    <input type="checkbox" id="terms" name="terms" required className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#3182ce] focus:ring-[#3182ce]" />
                                    <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed">I agree to the Terms of Service and Privacy Policy.</label>
                                </div>

                                <button type="submit" className="w-full py-3.5 sm:py-4 px-6 bg-[#3182ce] hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98]">
                                    Submit Free Review
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
