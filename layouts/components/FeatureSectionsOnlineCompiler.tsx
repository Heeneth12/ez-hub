import React from "react";
import {
  Users,
  Code,
  Settings,
  PlayCircle,
  Download,
  Save,
  Bookmark,
  Clock,
  Layers,
} from "lucide-react";

export default function FeatureSectionsOnlineCompiler() {
  return (
    <>
    {/* Features Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Packed with Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need for coding, learning, interviewing, and
              collaborating.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  30+ Programming Languages
                </h3>
                <p className="mt-2 text-gray-500">
                  From JavaScript to Python, C++ to Rust. We support all major
                  programming languages with syntax highlighting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Real-time Collaboration
                </h3>
                <p className="mt-2 text-gray-500">
                  Code together with your team in real-time. See changes as they
                  happen with multiple cursors and chat.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PlayCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Code Execution
                </h3>
                <p className="mt-2 text-gray-500">
                  Run your code instantly in the browser with our secure
                  execution environment. See results immediately.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Save className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Auto-Save & Versioning
                </h3>
                <p className="mt-2 text-gray-500">
                  Never lose your work with automatic saving and full version
                  history to revert to previous states.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Customizable Environment
                </h3>
                <p className="mt-2 text-gray-500">
                  Configure your editor with themes, keybindings, and settings
                  that match your preferences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Share & Export
                </h3>
                <p className="mt-2 text-gray-500">
                  Share your code with a simple link or export it in multiple
                  formats for use in other environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Use Cases Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perfect for Every Coding Need
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              From learning to teaching, interviews to production code, our
              editor adapts to your requirements.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Technical Interviews
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Conduct seamless technical interviews with our collaborative
                    editor. Test candidates' skills in real-time with a
                    professional environment that mimics real development.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Shared code view for interviewer and candidate
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Execute code to verify solutions
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Save sessions for team review
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Layers className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Learning & Teaching
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Create an interactive learning environment for students and
                    learners. Perfect for classrooms, tutorials and coding
                    education.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Interactive code demonstrations
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Real-time feedback and assistance
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Share example code libraries
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Quick Prototyping
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Test ideas rapidly without setting up a local environment.
                    Perfect for quick algorithm testing, API exploration, or
                    concept validation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Instant setup for all languages
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Common libraries pre-loaded
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Save and organize your snippets
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Bookmark className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Code Challenges
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Create and participate in coding challenges with automated
                    testing and leaderboards. Perfect for competitions and skill
                    assessment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Built-in test frameworks
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Performance metrics tracking
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-2 text-gray-600">
                        Customizable challenge templates
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
