export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mb-6">
            <span className="material-symbols-outlined">verified</span>
            Official Examination Portal
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-3xl">
            Prepare. Register.  
            <span className="text-amber-400"> Succeed.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Discover nationally recognized exams, certification programs,
            and professional assessments — all in one place.
          </p>

        
        </div>

        {/* Background decoration */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* CATEGORIES */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Browse Exam Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
            {[
              { label: "Medical", icon: "Doctor" },
              { label: "Law", icon: "Lawyer" },
              { label: "Engineering", icon: "Engineer" },
              { label: "Finance", icon: "Accountant" },
              { label: "Education", icon: "school" },
              { label: "Technology", icon: "computer" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <span className="material-symbols-outlined text-4xl text-amber-500 mb-4 block group-hover:scale-110 transition">
                  {cat.icon}
                </span>
                <p className="font-semibold">{cat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED EXAMS */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Featured Exams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "USMLE Step 1",
                desc: "Medical Licensing Examination",
                level: "High Difficulty",
                badge: "bg-red-100 text-red-700",
              },
              {
                title: "Bar Examination",
                desc: "National Legal Qualification",
                level: "Advanced",
                badge: "bg-orange-100 text-orange-700",
              },
              {
                title: "CFA Level I",
                desc: "Chartered Financial Analyst",
                level: "Intermediate",
                badge: "bg-blue-100 text-blue-700",
              },
            ].map((exam) => (
              <div
                key={exam.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exam.title}</h3>
                    <p className="text-sm text-slate-500">{exam.desc}</p>
                  </div>
                  <span
                    className={`${exam.badge} text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {exam.level}
                  </span>
                </div>

                <div className="mt-auto">
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
                    View Exam Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { stat: "120+", label: "Recognized Exams" },
              { stat: "2M+", label: "Registered Candidates" },
              { stat: "98%", label: "Verification Accuracy" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-extrabold text-amber-500">
                  {item.stat}
                </p>
                <p className="mt-2 font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
//  GitHub({
//     clientId:process.env.AUTH_GITHUB_ID,
//     clientSecret:process.env.AUTH_GITHUB_SECRET,
//   }),