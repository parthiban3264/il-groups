import { MapPin } from "lucide-react";
export default function Branches() {
  const branches = [
    {
    flag: '🌁', city: 'I Groups', state: 'Pudukkottai', hq: true,
    address: 'No.2741, Thirukkattalai,Ashok Nagar Bus stop, Sornaboomi Nagar, Pudukkottai – 622303',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 80,
  },
  {
    flag: '🏛️', city: 'Impetus', state: 'Pudukkottai', hq: false,
    address: 'TVS Shanmuga Nagar, Pudukkottai – 622303',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 80,
  },
  {
    flag: '🌆', city: 'Infinity', state: 'Pudukkottai', hq: false,
    address: 'Ashok Nagar, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 45,
  },
  {
    flag: '🏙️', city: 'Intelygenz', state: 'Pudukkottai', hq: false,
    address: 'Ashok Nagar, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 30,
  },
  {
    flag: '🌇', city: 'Inspire', state: 'Pudukkottai', hq: false,
    address: 'Melur, Tamil nadu – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 25,
  },
  {
    flag: '🏰', city: 'Insight', state: 'Pudukkottai', hq: false,
    address: 'Machuvadi, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 20,
  },
  {
    flag: '🌃', city: 'Innowave', state: 'Pattukottai', hq: false,
    address: 'Pattukottai Main– 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 18,
  },
  {
    flag: '🏢', city: 'Infogain', state: 'Karaikudi', hq: false,
    address: 'Karaikudi 630001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 18,
  },
];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050b1a] via-[#070f25] to-[#050b1a] text-white px-4 sm:px-6 py-12 sm:py-16">

      {/* Hero */}
      <div className="text-center mb-16 relative">

        {/* Glow background */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[500px] h-[200px] bg-cyan-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-cyan-400 mb-4">
        <div className="h-0.5 bg-cyan-400 w-6"></div>
          Branches
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          We're{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Everywhere
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto">
          8 cities across India and a growing global footprint — always close to where you need us most.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* India Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,212,255,0.08)]">

          <div>
            <h3 className="text-lg sm:text-xl font-extrabold">
              🇮🇳 Pan-India Presence
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              We are proudly growing across multiple locations:
            </p>
          </div>

          <div className="flex justify-between sm:justify-start gap-6 sm:gap-10 w-full sm:w-auto">
            {[['8', 'Cities'], ['214+', 'Team'], ['500+', 'Clients']].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {n}
                </div>
                <div className="text-xs text-gray-400">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {branches.map((b, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border backdrop-blur-md transition-all duration-500
              ${b.hq
                ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 shadow-[0_0_30px_rgba(0,212,255,0.15)]'
                : 'border-white/10 bg-white/5'}
              hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-cyan-400/40`}
            >

              {/* HQ Badge */}
              {b.hq && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md">
                  HQ
                </div>
              )}

              {/* Icon */}
              <div className="text-3xl mb-4">{b.flag}</div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-1">{b.city}</h3>

              <div className="text-cyan-400 text-xs font-semibold mb-4">
                {b.state}
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-gray-400">

                <div className="flex gap-2">
                  <span> <MapPin height={18}></MapPin> </span>
                  <span>{b.address}</span>
                </div>

                <div className="flex gap-2">
                  <span>📞</span>
                  <span>{b.phone}</span>
                </div>

                <div className="flex gap-2">
                  <span>✉️</span>
                  <span>{b.email}</span>
                </div>

              </div>

              <div className="h-px bg-white/10 my-4" />

              {/* Team */}
              <div className="flex items-center gap-2 text-sm text-gray-400">

                <div className="flex">
                  {[...Array(Math.min(3, Math.floor(b.team / 10)))].map((_, j) => (
                    <div
                      key={j}
                      className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-[#050b1a] flex items-center justify-center text-[10px] text-white -ml-1 first:ml-0"
                    >
                      👤
                    </div>
                  ))}
                </div>

                <span>{b.team}+ Team Members</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}