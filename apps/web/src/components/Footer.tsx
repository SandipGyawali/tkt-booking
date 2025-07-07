import { Facebook, Github, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-2xl font-black mb-4">
              <span className="bg-[#fffde8] text-black px-2">Tkt</span> Booking
            </div>
            <p className="font-sans text-base mb-4">
              Transform your ordinary photos into extraordinary cartoon
              masterpieces with our AI-powered platform.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#fffde8] text-black p-2 border-2 hover:bg-primary transition-colors"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="bg-[#fffde8] text-black p-2 border-2 hover:bg-primary transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="bg-[#fffde8] text-black p-2 border-2 hover:bg-primary transition-colors"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="border-t-2 border-white/20 text-sm mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span>
              © {new Date().getFullYear()} Tkt-Booking. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6">
            <span className="mr-2 font-semibold">Built By: </span> Sandip
            Gyawali
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
