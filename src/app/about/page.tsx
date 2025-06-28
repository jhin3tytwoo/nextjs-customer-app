// src/app/about/page.tsx
export default function AboutPage() {
  const features = [
    {
      title: "Customer Management",
      desc: "Manage detailed customer data and interactions with ease.",
      iconColor: "from-emerald-500 to-green-600",
      svgPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    },
    {
      title: "Reports & Analytics",
      desc: "Generate insightful reports and dashboards for smarter decisions.",
      iconColor: "from-blue-500 to-cyan-600",
      svgPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      title: "Security",
      desc: "Enterprise-grade encryption and access controls.",
      iconColor: "from-purple-500 to-pink-600",
      svgPath:
        "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      title: "High Performance",
      desc: "Fast and reliable, even with high-volume usage.",
      iconColor: "from-orange-500 to-red-600",
      svgPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-4">
            About CustomerApp
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern tools for managing your customers and building stronger
            relationships.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow border border-white/50 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Empower businesses to manage customers efficiently with intuitive
            design and modern tech.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${f.iconColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={f.svgPath}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Development Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Experts in enterprise systems and UX/UI design dedicated to building
            quality tools.
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 inline-block">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Crafted with precision and care
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
