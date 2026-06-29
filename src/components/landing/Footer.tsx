import { Mail, MapPin, Phone } from 'lucide-react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200/80 bg-white/90 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="space-y-6">
          <p className="text-2xl font-semibold text-[#6A1B9A]">ChamaConnect</p>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            A modern platform for women’s savings groups to contribute, manage payouts, and stay connected through every cycle.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <MapPin size={18} />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <Phone size={18} />
            <span>+254 700 000 000</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <Mail size={18} />
            <span>support@chamaconnect.com</span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><a href="#home" className="transition hover:text-[#C2185B]">Home</a></li>
              <li><a href="#features" className="transition hover:text-[#C2185B]">Features</a></li>
              <li><a href="#how-it-works" className="transition hover:text-[#C2185B]">How It Works</a></li>
              <li><a href="#benefits" className="transition hover:text-[#C2185B]">Benefits</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">Follow us</h3>
            <div className="mt-5 flex items-center gap-4 text-[#6A1B9A]">
              <a href="#">
    <FaFacebook className="h-5 w-5 hover:text-pink-600 transition" />
  </a>

  <a href="#">
    <FaInstagram className="h-5 w-5 hover:text-pink-600 transition" />
  </a>

  <a href="#">
    <FaLinkedin className="h-5 w-5 hover:text-pink-600 transition" />
  </a>

  <a href="#">
    <FaXTwitter className="h-5 w-5 hover:text-pink-600 transition" />
  </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6 text-sm text-slate-500 sm:px-8 lg:px-12">
        <p>© 2026 ChamaConnect. All rights reserved.</p>
      </div>
    </footer>
  )
}
