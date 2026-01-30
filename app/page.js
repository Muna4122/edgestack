export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">

        {/* Hero */}
        <section className="bg-white border rounded-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-3">
            National Examinations Council (NECO)
          </h1>
          <p className="text-gray-700 max-w-3xl">
            The National Examinations Council (NECO) is the official examination body
            responsible for the conduct of the Senior School Certificate Examination
            (SSCE), Basic Education Certificate Examination (BECE), and other national
            assessments in Nigeria.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To be a world-class examination body that conducts credible, reliable,
              and internationally accepted assessments.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To design, develop and conduct examinations that meet the educational
              needs of Nigeria while upholding integrity and excellence.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Examination Services</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "SSCE Internal",
                desc: "For candidates in registered secondary schools across Nigeria."
              },
              {
                title: "SSCE External",
                desc: "For private candidates seeking senior school certification."
              },
              {
                title: "BECE",
                desc: "Basic Education Certificate Examination for junior secondary level."
              },
              {
                title: "Result Checking",
                desc: "Secure online system for checking examination results."
              },
              {
                title: "Certificate Issuance",
                desc: "Collection and verification of examination certificates."
              },
              {
                title: "School Accreditation",
                desc: "Accreditation of schools and examination centres nationwide."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border rounded p-4">
                <h3 className="font-semibold text-green-700 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* News */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Latest News & Updates
          </h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Registration for SSCE Internal Examination opens nationwide.</li>
            <li>NECO releases examination timetable for the academic year.</li>
            <li>Important notice on result checking and token usage.</li>
            <li>Guidelines for accredited examination centres.</li>
            <li>Public advisory against examination malpractice.</li>
          </ul>
        </section>

        {/* Why NECO */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Why Choose NECO
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <p>
              NECO ensures credible and transparent examinations through strict
              supervision and modern assessment techniques.
            </p>
            <p>
              Certificates issued by NECO are nationally and internationally recognized.
            </p>
            <p>
              The council supports educational development and policy implementation
              across Nigeria.
            </p>
          </div>
        </section>

        {/* Public Information */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Public Information
          </h2>
          <p className="text-gray-700 mb-3">
            Candidates, schools, and stakeholders are advised to rely only on official
            NECO channels for accurate information regarding examinations and results.
          </p>
          <p className="text-gray-700">
            Any form of examination malpractice is punishable according to national
            examination laws and regulations.
          </p>
        </section>

      </div>
    </main>
  );
}
