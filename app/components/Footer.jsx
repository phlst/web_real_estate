"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">Reality Slovakia</div>
            <p className="text-slate-300">
              Váš partner pre prémiové nehnuteľnosti. Poskytujeme mimoriadne
              služby pri hľadaní vášho vysnívaného domova.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/apartments"
                  className="text-slate-300 hover:text-white"
                >
                  Hľadať byty
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white"
                >
                  Kontaktujte nás
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  O nás
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Hlavná 123</li>
              <li>851 01 Bratislava</li>
              <li>info@fakedata.sk</li>
              <li>+421 901 123 456</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Reality Slovakia. Všetky práva
            vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
