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

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div className="text-white pt-8">
                        <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-6 border border-blue-500/20">
                            Fast Track Process
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Start Your Claim Today</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Don't let the insurance companies delay your payment. Fill out the form to speak with a claim specialist instantly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-[#3182ce] shrink-0">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Secure &amp; Confidential</h4>
                                    <p className="text-sm text-slate-400 mt-1">Your information is encrypted and never shared without consent.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-[#3182ce] shrink-0">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Instant Review</h4>
                                    <p className="text-sm text-slate-400 mt-1">Our AI-assisted team reviews submissions in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100">
                        {submitted ? (
                            <div className="text-center py-12">
                                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                                <p className="text-slate-600">We've received your claim. Our team will contact you shortly.</p>
                            </div>
                        ) : (
                            <form
                                name="claim-form"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <input type="hidden" name="form-name" value="claim-form" />
                                <p className="hidden">
                                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                                </p>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Name</label>
                                    <input type="text" name="name" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400 text-sm" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone</label>
                                        <input type="tel" name="phone" required placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400 text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
                                        <input type="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400 text-sm" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accident Details</label>
                                    <textarea rows="4" name="details" required placeholder="Briefly describe what happened..." className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:bg-white transition-all placeholder:text-slate-400 text-sm resize-none"></textarea>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <input type="checkbox" id="terms" name="terms" required className="w-4 h-4 rounded border-slate-300 text-[#3182ce] focus:ring-[#3182ce]" />
                                    <label htmlFor="terms" className="text-xs text-slate-500">I agree to the Terms of Service and Privacy Policy.</label>
                                </div>

                                <button type="submit" className="w-full py-4 px-6 bg-[#3182ce] hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98]">
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
