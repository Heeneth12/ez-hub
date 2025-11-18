import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="py-12 px-4 bg-linear-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <hr className="text-gray-300 border rounded-4xl mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-black text-gray-900 mb-4">EZ Hub</h3>
              <p className="text-sm text-gray-600 mb-2">2021 © EZ Hub</p>
              <p className="text-sm text-gray-600">All rights reserved.</p>
            </div>

            {/* Navigation Column */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Terms Of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
