import { Navigation, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-6 text-white">
              <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg text-white">
                <Navigation size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight">AutoClaim</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fast, Fair, and Hassle-Free Accident Claim Support. We fight for your rights.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="text-[#3182ce]" size={16} />
                888.408.0938
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-[#3182ce]" size={16} />
                info@auto-file-claim.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-[#3182ce]" size={16} />
                Florida, USA
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© Auto File Claim 2025. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
