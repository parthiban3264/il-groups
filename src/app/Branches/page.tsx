import Image from "next/image";
import { MapPin } from "lucide-react";
const building = <Image src="/building.png" height={100} width={100} alt="office"></Image>

export default function Branches() {
  const branches = [
    {
      flag: building, city: 'I Groups', state: 'Pudukkottai', hq: true,
      address: 'No.2741, Thirukkattalai,Ashok Nagar Bus stop, Sornaboomi Nagar, Pudukkottai – 622303',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 80,
    },
    {
      flag: building, city: 'Impetus', state: 'Pudukkottai', hq: false,
      address: 'TVS Shanmuga Nagar, Pudukkottai – 622303',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 80,
    },
    {
      flag: building, city: 'Infinity', state: 'Pudukkottai', hq: false,
      address: 'Ashok Nagar, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 45,
    },
    {
      flag: building, city: 'Intelygenz', state: 'Pudukkottai', hq: false,
      address: 'Ashok Nagar, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 30,
    },
    {
      flag: building, city: 'Inspire', state: 'Pudukkottai', hq: false,
      address: 'Melur, Tamil nadu – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 25,
    },
    {
      flag: building, city: 'Insight', state: 'Pudukkottai', hq: false,
      address: 'Machuvadi, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 20,
    },
    {
      flag: building, city: 'Innowave', state: 'Pattukottai', hq: false,
      address: 'Pattukottai Main– 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 18,
    },
    {
      flag: building, city: 'Infogain', state: 'Karaikudi', hq: false,
      address: 'Karaikudi 630001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 18,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-white px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">

      {/* 🌌 GLOBAL BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] 
        bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
        blur-3xl rounded-full" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] 
        bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 
        blur-3xl rounded-full" />
      </div>

      {/* Optional Grid Texture */}
      <div className="absolute inset-0 -z-20 opacity-10 
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] 
      bg-[size:40px_40px]" />

      {/* HERO */}
      <div className="text-center mb-16 relative">

        {/* Hero Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[600px] h-[250px] 
          bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
          blur-3xl rounded-full" />
        </div>

        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-cyan-400 mb-4">
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

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">

        {/* INDIA BANNER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 p-6 sm:p-8 rounded-2xl border border-white/10 
        bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
        backdrop-blur-md shadow-[0_0_40px_rgba(0,212,255,0.08)]">

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

        {/* GRID */}
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

              {b.hq && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full 
                bg-gradient-to-r from-cyan-400 to-purple-500">
                  HQ
                </div>
              )}

              <div className="text-3xl mb-4">{b.flag}</div>

              <h3 className="font-bold text-lg mb-1">{b.city}</h3>

              <div className="text-cyan-400 text-xs font-semibold mb-4">
                {b.state}
              </div>

              <div className="space-y-2 text-sm text-gray-400">

  {/* Address */}
  <div className="flex flex-col gap-4">
  <div className="flex gap-2 items-start">
    <MapPin height={20} width={20} className="shrink-0" />
    <span>{b.address}</span>
  </div>

  {/* Phone → WhatsApp */}
  <div className="flex gap-2 items-center">
    <Image src="/icons/whatsapp.svg" alt="phone" width={18} height={18} />
    <a
      href={`https://wa.me/${b.phone.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition"
    >
      {b.phone}
    </a>
  </div>

  {/* Email */}
  <div className="flex gap-2 items-center">
    <Image src="/icons/email.svg" alt="email" width={20} height={20} />
    <a
      href={`mailto:${b.email}`}
      className="hover:text-cyan-400 transition"
    >
      {b.email}
    </a>
  </div>
  </div>

</div>

              <div className="h-px bg-white/10 my-4" />

              <div className="flex items-center gap-2 text-sm text-gray-400">

                <div className="flex">
                  {[...Array(Math.min(3, Math.floor(b.team / 10)))].map((_, j) => (
                    <div
                      key={j}
                      className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-[#0b0f19] flex items-center justify-center text-[10px] -ml-1 first:ml-0"
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