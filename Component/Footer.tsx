import Link from "next/link";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 h-[155]">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg mb-4">Let's Connect!</p>

        <div className="flex space-x-6">
          {/* Email */}
          <a href="mailto:abarnarajan2003@gmail.com" aria-label="Send Email">
            <FaEnvelope size={24} className="hover:text-gray-400" />
          </a>

          {/* Phone */}
          <a href="tel:+9003302133" aria-label="Call">
            <FaPhone size={24} className="hover:text-gray-400" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9597054675"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} className="hover:text-gray-400" />
          </a>
        </div>

        <p className="text-sm mt-4">
          © {new Date().getFullYear()} Abarna Rajan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
