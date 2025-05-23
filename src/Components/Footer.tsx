import { FC, useEffect } from "react";
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  // Using useEffect for debugging
  useEffect(() => {
    console.log("Footer component mounted");
  }, []);

  return (
    <div className="w-full bg-[#080133]">
      <footer 
        className="relative bg-[#080133] text-white py-12 px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(217, 215, 234, 0.2) 0%, transparent 45%), radial-gradient(circle at 75% 75%, rgba(59, 50, 146, 0.2) 0%, transparent 45%)"
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src="/src/assets/logo1.png" 
                alt="Company Logo" 
                className="h-20 w-30"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Crafting Innovative Solutions for a Digital Tomorrow
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#4ade80] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#4ade80] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#4ade80] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-[#4ade80] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-[#4ade80] mr-3" />
                <a 
                  href="mailto:contact@microdigitall.com" 
                  className="text-gray-300 hover:text-[#4ade80] transition-colors"
                >
                  contact@microdigitall.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#4ade80] mr-3" />
                <span className="text-gray-300">+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-[#4ade80] mr-3" />
                <span className="text-gray-300">Noida, India</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;