"use client"
import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

// ── Mock Data ─────────────────────────────────────────────
const mockEvents = [
  {
    id: "1",
    type: "workshop",
    title: "Flutter Bootcamp",
    desc: "Learn Flutter from scratch with hands-on projects.",
    date: "2026-04-10",
    location: "Chennai",
    seats: "50",
    photo: "https://picsum.photos/400/300?1",
  },
  {
    id: "2",
    type: "hackathon",
    title: "AI Hackathon",
    desc: "Build AI-powered apps in 24 hours.",
    date: "2026-05-01",
    location: "Bangalore",
    seats: "100",
    photo: "https://picsum.photos/400/300?2",
  },
  {
    id: "3",
    type: "conference",
    title: "Tech Conference 2026",
    desc: "Industry leaders sharing insights.",
    date: "2026-06-15",
    location: "Hyderabad",
    seats: "200",
    photo: "https://picsum.photos/400/300?3",
  },
];

// ── Types ────────────────────────────────────────────────
interface Event {
  id: string;
  type: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  seats: string;
  photo: string;
}

// ── Fake Delay ───────────────────────────────────────────
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const fetchEvents = async (): Promise<Event[]> => {
  await delay(800);
  return mockEvents;
};

// ── Colors ───────────────────────────────────────────────
const typeColors: Record<string, string> = {
  workshop: "#f59e0b",
  hackathon: "#ef4444",
  conference: "#6366f1",
  webinar: "#10b981",
};

// ── Modal ────────────────────────────────────────────────
function RegisterModal({ event, onClose }: any) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setStatus("error");
      setMessage("Name and Email required");
      return;
    }
    setStatus("loading");
    await delay(1000);
    setStatus("success");
    setMessage("Registration successful 🎉");
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-5"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] border border-white/10 rounded-2xl p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2">Register</h3>
        <p className="text-violet-400 text-sm mb-4">{event.title}</p>

        {status === "success" ? (
          <div className="text-green-500 text-center">{message}</div>
        ) : (
          <>
            <input
              className="w-full mb-3 p-2 rounded bg-white/5 border border-white/10"
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <input
              className="w-full mb-3 p-2 rounded bg-white/5 border border-white/10"
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            {status === "error" && (
              <p className="text-red-500 text-xs mb-2">{message}</p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-2 rounded font-semibold"
            >
              {status === "loading" ? "Registering..." : "Register"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────
export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* HERO */}
      <div className="relative text-center px-6 pt-24 pb-16 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="relative inline-block bg-white/5 border border-white/10 text-cyan-400 text-xs px-5 py-2 rounded-full mb-6">
        <div className="bg-cyan-400 w-5 h-0.5"></div>
          EVENTS
        </div>

        <h1 className="relative text-4xl md:text-6xl font-extrabold mb-6">
          Learn,{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Connect
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Grow
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Workshops, hackathons, conferences, and webinars — be part of India's most exciting community.
        </p>
      </div>

      {/* EVENTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl font-extrabold mb-14">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              All Events
            </span>
          </h2>

          {loading ? (
            <div className="text-center py-16">
              <div className="w-10 h-10 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto" />
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e) => (
                <div
                  key={e.id}
                  className="group bg-[#111827] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={e.photo}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span
                      className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full text-white"
                      style={{ background: typeColors[e.type] }}
                    >
                      {e.type}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col">
                    <h3 className="font-bold text-lg mb-2">{e.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {e.desc}
                    </p>

                    <div className="flex justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1 shrink-0"> <CalendarDays height={20}></CalendarDays> {e.date}</span>
                      <span className="flex items-center gap-1 shrink-0"> <MapPin height={19}></MapPin> {e.location}</span>
                    </div>

                    <button
                      onClick={() => setSelectedEvent(e)}
                      className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 py-2 rounded text-sm font-semibold"
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedEvent && (
        <RegisterModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}