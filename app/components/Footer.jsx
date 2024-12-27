import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#3e2c2a] text-white py-10 px-8 lg:px-16 xl:px-24">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Follow us on social media</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#e76f51] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-6 text-sm">&copy; 2024 STEM-Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
