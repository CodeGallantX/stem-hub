import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#3e2c2a] text-white py-10 px-8 lg:px-16 xl:px-24 flex items-center justify-center min-h-screen">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Get in touch:</p>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://facebook.com"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://x.com/JohnSamue24013"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com/in/john-samuel-cgx"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </Link>
        </div>
        {/* <p className="mt-6 text-sm">&copy; 2024 STEM-Hub. All rights reserved.</p> */}
      </div>
    </footer>
  );
}