import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, Mail, MapPin, Clock, Shield, Zap, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { NETLIFY_FORM_NAME } from '../constants/forms'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('/forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
            if (response.ok) {
                setSubmitted(true)
            } else {
                console.error('Form submission failed:', response.status)
            }
        } catch (error) {
            console.error('Form submission error:', error)
        }
    }

    return (
        <>
            <Head>
                <title>Contact Us - Auto File Claim</title>
                <meta name="description" content="Get in touch with our expert team. We're here to help you with your car accident claim 24/7." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 bg-[#1a365d] overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-50"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3182ce] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                            We're Here to Help
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 px-2">
                            Get Your Free <span className="text-blue-400">Claim Review</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
                            Fill out the form below and our expert team will contact you within 24 hours to discuss your case.
                        </p>
                    </div>

                    {/* Wave Shape */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(146%+1.3px)] h-12 sm:h-16 lg:h-24 fill-white">
                            <path d="M985.66,92.83C906.67,72,823.78,31,432.84,2c-47.52-3.53-96.65-4.46-146.53-3.08-37.48,1.04-74.95,2.06-112.41,3.09L173.9,2h0L3.1,2v99.85h1196.9V93.63C1161.4,103.11,1088.61,118.84,985.66,92.83Z" className="opacity-100"></path>
                        </svg>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-12 sm:py-16 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Contact Information Sidebar */}
                            <div className="lg:col-span-1 space-y-6 lg:space-y-8">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact Information</h2>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
                                        Our team is available 24/7 to assist you with your car accident claim. Reach out anytime.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-4 sm:space-y-6">
                                    <a href="tel:8884080938" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all group">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#3182ce] shrink-0 group-hover:scale-110 transition-transform">
                                            <Phone size={18} className="sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Phone</h4>
                                            <p className="text-slate-600 text-xs sm:text-sm">888 408 0938</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#3182ce] shrink-0">
                                            <MapPin size={18} className="sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Address</h4>
                                            <p className="text-slate-600 text-xs sm:text-sm">6391 Elgin St. Celina, 10299</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#3182ce] shrink-0">
                                            <Clock size={18} className="sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Business Hours</h4>
                                            <p className="text-slate-600 text-xs sm:text-sm">24/7 Available</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="pt-6 sm:pt-8 border-t border-slate-200 space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Shield className="text-blue-600" size={18} />
                                        <span className="text-xs sm:text-sm font-medium text-slate-700">Secure & Confidential</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Zap className="text-blue-600" size={18} />
                                        <span className="text-xs sm:text-sm font-medium text-slate-700">24-Hour Response Time</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <CheckCircle className="text-blue-600" size={18} />
                                        <span className="text-xs sm:text-sm font-medium text-slate-700">No Win, No Fee</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 border border-slate-100 shadow-sm">
                                    {submitted ? (
                                        <div className="text-center py-12 sm:py-16">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                                <CheckCircle size={32} className="sm:w-10 sm:h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Thank You!</h3>
                                            <p className="text-base sm:text-lg text-slate-600 mb-2">We've received your claim request.</p>
                                            <p className="text-sm sm:text-base text-slate-500">Our team will contact you within 24 hours to discuss your case.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-6 sm:mb-8">
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">Start Your Free Claim Review</h3>
                                                <p className="text-sm sm:text-base text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                                            </div>

                                            <form
                                                name={NETLIFY_FORM_NAME}
                                                method="POST"
                                                action="/forms.html"
                                                data-netlify="true"
                                                data-netlify-honeypot="bot-field"
                                                onSubmit={handleSubmit}
                                                className="space-y-5 sm:space-y-6"
                                            >
                                                <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
                                                <p className="hidden">
                                                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                                                </p>

                                                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs sm:text-sm font-semibold text-slate-700">Full Name *</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            required
                                                            placeholder="John Doe"
                                                            className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:border-transparent transition-all placeholder:text-slate-400"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-xs sm:text-sm font-semibold text-slate-700">Phone Number *</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            required
                                                            placeholder="(555) 000-0000"
                                                            className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:border-transparent transition-all placeholder:text-slate-400"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:border-transparent transition-all placeholder:text-slate-400"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Accident Details <span className="text-slate-400 font-normal">(Optional)</span></label>
                                                    <textarea
                                                        rows="4"
                                                        name="details"
                                                        placeholder="Please describe what happened during the accident, when it occurred, and any injuries or damages..."
                                                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-slate-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3182ce] focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                                                    ></textarea>
                                                </div>

                                                <div className="flex items-start gap-2.5 sm:gap-3">
                                                    <input
                                                        type="checkbox"
                                                        id="terms"
                                                        name="terms"
                                                        required
                                                        className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded border-slate-300 text-[#3182ce] focus:ring-[#3182ce]"
                                                    />
                                                    <label htmlFor="terms" className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                                        I agree to the Terms of Service and Privacy Policy, and consent to be contacted regarding my claim.
                                                    </label>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full py-3.5 sm:py-4 px-6 sm:px-8 bg-[#3182ce] hover:bg-blue-600 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                                                >
                                                    Submit Free Claim Review
                                                </button>

                                                <p className="text-xs text-slate-500 text-center leading-relaxed">
                                                    By submitting this form, you agree to receive communications from Auto File Claim. We respect your privacy.
                                                </p>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
