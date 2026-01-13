import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 sm:mb-8">
              <img
                src="/logo.png"
                alt="Auto File Claim"
                className="h-12 sm:h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Fast, Fair, and Hassle-Free Accident Claim Support. We specialize in fighting for car accident victims to ensure you get justice, not just a settlement.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-0.5 shrink-0" size={16} />
                <span className="font-medium text-slate-300">888 408 0938</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-0.5 shrink-0" size={16} />
                <span className="font-medium text-slate-300 break-all">info@auto-file-claim.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-0.5 shrink-0" size={16} />
                <span className="font-medium text-slate-300">6391 Elgin St. Celina, 10299</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/file-your-claim-today" className="hover:text-blue-400 transition-colors">File Your Claim Today</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          <p>© Auto File Claim 2026. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
