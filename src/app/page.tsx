import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto py-16 flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* Logo */}
        <div className="w-20 h-20 mb-8 rounded-2xl shadow-lg shadow-blue-200/50 overflow-hidden flex items-center justify-center">
          <Image
            src="/image/3d-house.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Title & Description */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            CustomerApp
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Manage your customers and grow your business efficiently.
            <br />
            <span className="text-blue-600 font-medium">Built for you.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/customers">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Get Started
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <button className="text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105">
              See Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
