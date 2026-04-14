import { Mail, MapPin, Phone } from 'lucide-react';
import tuulekodaLogo from '@/assets/images/tuulekoda-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full flex flex-col items-center pt-24 pb-12">
      <div className="max-w-7xl w-full px-8 pb-16 border-b border-gray-800 flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
        
        {/* Left Column - Logo */}
        <div className="md:w-1/3">
          <div className="mb-6">
            <img src={tuulekodaLogo} alt="Tuulekoda Logo" className="h-16 lg:h-20 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Loodud usaldusele, loodud töötama
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h4 className="font-oswald text-xl uppercase font-bold mb-6">Leheküljed</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Avaleht</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Masinapark</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Miks valida meid</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tagasiside</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-xl uppercase font-bold mb-6">Kontakt</h4>
            <ul className="flex flex-col gap-5 text-sm text-gray-400">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="hover:text-white transition-colors cursor-default">+372 5834 7300</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-primary" />
                </div>
                <a href="mailto:info@tuulekoda.ee" className="hover:text-primary transition-colors">info@tuulekoda.ee</a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="hover:text-white transition-colors cursor-default leading-relaxed">
                  Tuule, Kursi küla, Põltsamaa vald,<br/>Jõgevamaa 49007 / Tartu, Tartumaa
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl px-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© 2024 Tuulekoda. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
