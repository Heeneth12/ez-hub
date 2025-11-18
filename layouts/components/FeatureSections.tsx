import React from "react";
import { Users, Code, Video, Shield, Settings, Clock } from "lucide-react";
import Link from "next/link";

export default function FeatureSections() {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="bg-white py-8 sm:py-12" aria-label="Platform features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Platform Features
            </h1>
            <h2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 sm:tracking-tight">
              Three powerful tools in one platform
            </h2>
            <p className="max-w-xl mt-3 sm:mt-5 mx-auto text-lg sm:text-xl text-gray-500">
              EZ-CodE combines an online compiler, collaborative coding, and
              technical interview tools to meet all your coding needs.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Online Compiler Card - Clickable */}
            <article>
              <Link href="/online-compiler" className="block group h-full" aria-label="Learn more about our online compiler">
                <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors" aria-hidden="true">
                    <Code size={24} />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 inline-block">
                      Online Compiler
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300" aria-hidden="true"></span>
                    </h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-3">Explore our compiler →</p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Support for 30+ programming languages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Instant code execution and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Advanced debugging tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Code organization and saving</span>
                    </li>
                  </ul>
                </div>
              </Link>
            </article>

            {/* Collaborative Coding Card - Clickable */}
            <article>
              <Link href="/collaborative-coding" className="block group h-full" aria-label="Learn more about our collaborative coding tools">
                <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors" aria-hidden="true">
                    <Users size={24} />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 inline-block">
                      Collaborative Coding
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300" aria-hidden="true"></span>
                    </h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-3">Start collaborating →</p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Real-time code synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Multiple users editing simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Code chat and annotations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Shared terminal and output</span>
                    </li>
                  </ul>
                </div>
              </Link>
            </article>

            {/* Technical Interviews Card - Clickable */}
            <article>
              <Link href="/technical-interviews" className="block group h-full" aria-label="Learn more about our technical interview platform">
                <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-blue-200 h-full">
                  <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-blue-700 transition-colors" aria-hidden="true">
                    <Video size={24} />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 inline-block">
                      Technical Interviews
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300" aria-hidden="true"></span>
                    </h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-3">Schedule an interview →</p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>HD video conferencing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Pre-loaded interview problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Candidate evaluation tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                      <span>Session recording and playback</span>
                    </li>
                  </ul>
                </div>
              </Link>
            </article>

            {/* Other feature cards with improved responsiveness */}
            <article className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5" aria-hidden="true">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Secure & Reliable
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Private rooms with access control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Regular backups of your code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>GDPR compliant infrastructure</span>
                </li>
              </ul>
            </article>

            <article className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5" aria-hidden="true">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customizable Experience
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Personalized IDE themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Custom keyboard shortcuts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Extensible with plugins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Team branding options</span>
                </li>
              </ul>
            </article>

            <article className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5" aria-hidden="true">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Time-Saving Tools
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Code snippets library</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Smart code completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Integration with GitHub/GitLab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2" aria-hidden="true">•</span>
                  <span>Quick project templates</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}