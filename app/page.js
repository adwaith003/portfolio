export default function Home() {
  const cyberSkills = [
    'Prisma Access',
    'SASE',
    'Firewall Security',
    'Threat Mitigation',
    'Cloud Security',
    'Critical Incident Handling',
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <section className="rounded-[40px] overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-black to-cyan-950 shadow-2xl">
        <div className="p-10 md:p-16 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm border border-cyan-400/20">
                CLOUD SECURITY ENGINEER
              </span>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Adwaith M
                <span className="block text-cyan-400">Portfolio</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                TAC Engineer specializing in Prisma Access, SASE, firewall
                security, outage management, and enterprise cloud networking.
                Handling real-world security incidents with precision and speed.
              </p>
            </div>

            <div className="w-40 h-40 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center text-5xl font-bold shadow-2xl shadow-cyan-500/20">
              AM
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <p className="text-gray-400 text-sm">Current Role</p>
              <h3 className="text-2xl font-bold mt-2">L2 TAC Engineer</h3>
              <div className="flex items-center gap-3 mt-3">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/80/Palo_Alto_Networks_2020_Logo.svg"
    alt="Palo Alto Networks"
    className="h-8 bg-white p-1 rounded-lg"
  />

  <p className="text-cyan-300">
    Palo Alto Networks Project
  </p>
</div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <p className="text-gray-400 text-sm">Experience</p>
              <h3 className="text-2xl font-bold mt-2">2+ Years</h3>
              <p className="text-cyan-300 mt-3">Enterprise Security Operations</p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <p className="text-gray-400 text-sm">Certification</p>
              <h3 className="text-2xl font-bold mt-2">PCNSE</h3>
              <p className="text-cyan-300 mt-3">Palo Alto Networks</p>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl font-bold">Core Expertise</h3>

            <div className="flex flex-wrap gap-4">
              {cyberSkills.map((skill, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-8">
            <h3 className="text-3xl font-bold mb-5">About Me</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Network & Cloud Security Engineer with 2+ years of enterprise
              experience specializing in SASE, Prisma Access, and Palo Alto
              Networks security platforms. Proven expertise in enterprise VPN
              and proxy architectures, incident handling, outage management,
              and secure connectivity across distributed infrastructures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-3xl font-bold mb-5">Experience</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">
                    L2 TAC Engineer
                  </h4>
                  <p className="text-cyan-300">
                    Movate Technologies • 2026 - Present
                  </p>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    Handling critical incidents, outages, escalations,
                    troubleshooting, and enterprise security operations.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    L1 TAC Engineer
                  </h4>
                  <p className="text-cyan-300">
                    Movate Technologies • 2025 - 2026
                  </p>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    Provided enterprise technical support for cloud security,
                    networking, Prisma Access, and SASE environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-3xl font-bold mb-5">Education</h3>

              <div className="space-y-3">
                <p className="text-xl font-semibold">
                  B.Tech Computer Science Engineering
                </p>
                <p className="text-gray-300">
                  St. Joseph’s College of Engineering & Technology
                </p>
                <p className="text-cyan-300">CGPA: 8.25</p>
              </div>

              <div className="mt-10">
                <h3 className="text-3xl font-bold mb-5">Contact</h3>

                <div className="space-y-3 text-gray-300">
                  <p>📧 adwaithm10@gmail.com</p>
                  <p>📱 +91 8590009448</p>
                  <p>📍 Chennai, India</p>

                                <div className="mt-8">
                  <a
                    href="https://www.linkedin.com/in/adwaith-m-75b562201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 hover:bg-cyan-500/20 transition-all"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="LinkedIn"
                      className="w-12 h-12 rounded-xl"
                    />

                    <div>
                      <p className="text-cyan-300 font-semibold text-lg">
                        Connect on LinkedIn
                      </p>
                      <p className="text-gray-400 text-sm break-all">
                        linkedin.com/in/adwaith-m-75b562201
                      </p>
                    </div>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
