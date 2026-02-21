import { useState, useEffect } from "react";

const stats = [
  { label: "Founded", value: "1926" },
  { label: "Students", value: "18,400+" },
  { label: "Faculty", value: "1,200+" },
  { label: "Acres", value: "342" },
];

const departments = [
  { name: "Engineering & Technology", icon: "⚙️", count: "4,200 students" },
  { name: "Arts & Humanities", icon: "🎨", count: "2,800 students" },
  { name: "Sciences & Research", icon: "🔬", count: "3,600 students" },
  { name: "Business & Economics", icon: "📊", count: "3,100 students" },
];

const campusSpots = [
  {
    name: "Heritage Building",
    desc: "The 'face and soul' of the institute, this colonial-style building was inaugurated in 1926. It houses the administrative offices and the Geological Museum.",
    tag: "Heritage",
    hours: "Mon–Sun · 7am – 11pm",
    image: "https://commons.wikimedia.org/wiki/File:Heritage_Building_at_IIT_Dhanbad_1.jpg",
    accent: "#b45309",
    light: "#fef3c7",
  },
  {
    name: "Central Library",
    desc: "One of the largest technical libraries in Asia, this seven-storey facility is a primary academic hub for research and study.",
    tag: "Modern",
    hours: "Mon–Sat · 8am – 10pm",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvbh8teVscRTaI3gr0qPrqX-IIQixns23rscBaVUqQisow3ttw",
    accent: "#1d4ed8",
    light: "#eff6ff",
  },
  {
    name: "Oval Garden",
    desc: "A beautifully manicured garden featuring a 2.5-million-year-old petrified wood fossil and serving as a central green lung for the campus.",
    tag: "Social",
    hours: "Open all day · All year",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2eCxvz74dNqxV4Jq8r-dC9Iktn6dmLSesQroXE6Tu9AVV-sc",
    accent: "#15803d",
    light: "#f0fdf4",
  },
  {
    name: "Student Activity Centre (SAC)",
    desc: "A high-end facility for extracurriculars, including gyms, yoga centers, and synthetic sports courts.",
    tag: "Historic",
    hours: "Mon–Fri · 9am – 5pm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvqTT5EaH3tFpcFK41Ljo5l-iJyahI8JPMIlDvaHAgQGfcjPI",
    accent: "#92400e",
    light: "#fff7ed",
  },
  {
    name: "New Lecture Hall Complex (NLHC)",
    desc: "A high-capacity academic building designed for modern learning, featuring smart classrooms and large halls for undergraduate lectures.",
    tag: "Education",
    hours: "Daily · 6am – 9pm",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&q=80",
    accent: "#7c3aed",
    light: "#f5f3ff",
  },
  {
    name: 'I2H',
    desc: 'Institue Innovation Hub',
    tag: 'Modern',
    hours: "Daily · 6am – 9pm",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvog-iTnN3BpBek3xaMMte071npLPZyhGrTUR4QVRzboS4-hmD',
    accent: "#7c3aed",
    light: "#f5f3ff", 
  }
];

const milestones = [
  {
    year: "1901",
    event:
      "Indian National Congress resolution to establish a Government College of Mining Engineering.",
  },
  {
    year: "1920",
    event:
      "McPherson Committee recommendation to set up the institution based on the Royal School of Mines, London.",
  },
  {
    year: "1926",
    event:
      "Formal inauguration of the Indian School of Mines by Lord Irwin on December 9.",
  },
  {
    year: "1957",
    event:
      "Expansion into Petroleum Engineering and Applied Geophysics; renamed to Indian School of Mines.",
  },
  {
    year: "1967",
    event:
      "Granted Deemed-to-be University status by the University Grants Commission.",
  },
  {
    year: "1997",
    event:
      "Started admitting undergraduate students through the IIT-JEE entrance examination.",
  },
  {
    year: "2016",
    event:
      "Officially converted into an Indian Institute of Technology (IIT) on September 6.",
  },
  {
    year: "2025",
    event:
      "Commencement of Centenary Year celebrations and 100th Foundation Day on December 9.",
  },
  {
    year: "2026",
    event: "Centenary Convocation and launch of new integrated BS-MS programs.",
  },
];

const testimonials = [
  {
    name: "Dr. Priya Mehta",
    role: "Professor of Astrophysics",
    quote: "Harrington's culture of inquiry is unmatched. Students here don't just learn — they discover.",
    avatar: "PM",
    bg: "#1e3a5f",
  },
  {
    name: "Arjun Sinha",
    role: "Alumni, Class of 2019",
    quote: "The campus gave me lifelong friendships and the confidence to build my own company.",
    avatar: "AS",
    bg: "#b45309",
  },
  {
    name: "Vice Chancellor Reema Das",
    role: "Head of Administration",
    quote: "Our mission has always been simple: nurture brilliant minds, build a better world.",
    avatar: "RD",
    bg: "#15803d",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80",
  "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a7b9c?w=400&q=80",
  "https://images.unsplash.com/photo-1576490559132-e9e8f31b8e50?w=400&q=80",
  "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80",
  "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&q=80",
  "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&q=80",
];

function CampusCard({ spot, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border"
      style={{
        minHeight: 300,
        borderColor: isActive ? spot.accent : "#e5e7eb",
        boxShadow: isActive
          ? `0 0 0 2px ${spot.accent}33, 0 16px 40px -8px ${spot.accent}33`
          : "0 1px 3px rgba(0,0,0,0.08)",
        transform: isActive ? "scale(1.015)" : "scale(1)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease",
      }}
    >
      <img
        src={spot.image}
        alt={spot.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: isActive ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: spot.accent }} />

      {/* Tag */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full text-white tracking-widest uppercase"
          style={{ backgroundColor: spot.accent }}
        >
          {spot.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h4 className="text-lg font-bold text-white mb-1">{spot.name}</h4>
        <div
          style={{
            maxHeight: isActive ? "90px" : "0",
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s ease, opacity 0.4s ease",
          }}
        >
          <p className="text-white/75 text-xs leading-relaxed mb-2">{spot.desc}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50">{spot.hours}</span>
          <span className="text-xs font-semibold" style={{ color: isActive ? "#fde68a" : "rgba(255,255,255,0.6)" }}>
            {isActive ? "▲ Close" : "▼ Explore"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleMilestone, setVisibleMilestone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMilestone((p) => (p + 1) % milestones.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ════════════ HERO ════════════ */}
      <header className="relative overflow-hidden min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
          alt="Harrington University campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lighter overlay for white feel at bottom */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 50%, rgba(255,255,255,1) 100%)" }} />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-20">
          <div className="flex text-2xl items-center gap-3">
            <div className="rounded-full flex items-center justify-center text-white font-bold bg-[#1e3a5f] p-1">ISM</div>
            <span className="tracking-widest uppercase text-white font-medium font-serif">IIT-ISM Dhanbad</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-white/80" style={{ fontFamily: "sans-serif" }}>
            {["Overview", "Journey", "Campus", "People"].map((t) => (
              <a key={t} href={`#${t.toLowerCase()}`} className="hover:text-amber-300 transition-colors tracking-wide">{t}</a>
            ))}
          </div>
        </nav>

        {/* Hero text — sits above the white fade */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-20 pb-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-amber-600 text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "sans-serif" }}>Est. 1926 · Excellence in Education</span>
          </div>
          <h1 className="font-bold leading-none text-gray-900 mb-1" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "-0.03em" }}>
            IIT-ISM
          </h1>
          <h2 className="font-normal leading-none mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em", color: "#1e3a5f" }}>
            Dhanbad
          </h2>
          <p className="max-w-lg text-gray-500 text-lg leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            A century of scholarship, discovery, and service. Where traditions of learning meet the ambitions of tomorrow.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-10 border-t border-gray-200">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold" style={{ color: "#1e3a5f" }}>{s.value}</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase mt-0.5" style={{ fontFamily: "sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ════════════ ABOUT ════════════ */}
      <section id="overview" className="px-8 md:px-20 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: "#b45309", fontFamily: "sans-serif" }}>Who We Are</span>
          <h3 className="text-5xl font-bold mt-3 mb-6 leading-tight text-gray-900">
            A Living <br /><span style={{ color: "#1e3a5f" }}>Legacy</span>
          </h3>
          <div className="space-y-4 text-gray-500 leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            <p>Harrington University stands as one of the nation's most storied institutions of higher learning. Founded by visionary educator Chancellor Elias Harrington in the autumn of 1887, the university began as a modest school of liberal arts on the rolling countryside of Westmore County.</p>
            <p>Today, we are a globally recognised research university spanning 11 faculties, 342 acres of historic and modern campus grounds, and a worldwide community of over 150,000 alumni across 90+ countries.</p>
            <p>Our motto — <em className="text-gray-700 italic">"Lux et Veritas"</em> (Light and Truth) — has guided every student, scholar, and dreamer who has walked beneath our arched gateways.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {departments.map((d) => (
            <div
              key={d.name}
              className="rounded-xl p-5 border border-gray-100 hover:border-amber-300 hover:shadow-md transition-all group bg-white"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              <div className="text-2xl mb-2">{d.icon}</div>
              <div className="text-sm font-semibold text-gray-800 group-hover:text-amber-700 transition-colors leading-snug" style={{ fontFamily: "sans-serif" }}>{d.name}</div>
              <div className="text-xs text-gray-400 mt-1" style={{ fontFamily: "sans-serif" }}>{d.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ TIMELINE ════════════ */}
      <section id="journey" className="py-24 px-8 md:px-20" style={{ backgroundColor: "#f8f7f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-amber-600 font-serif">Our Journey</span>
          </div>
          <h3 className="text-5xl font-bold mb-14 text-gray-900">
            {Number(new Date().getFullYear()) - 1926} Years of <span className="text-[#1e3a5f]">History</span>
          </h3>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="relative flex gap-8 items-start"
                  style={{ opacity: visibleMilestone === i ? 1 : 0.25, transition: "opacity 0.7s ease" }}
                >
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0"
                    style={{
                      borderColor: visibleMilestone === i ? "#1e3a5f" : "#d1d5db",
                      backgroundColor: visibleMilestone === i ? "#dbeafe" : "white",
                      transform: visibleMilestone === i ? "scale(1.15)" : "scale(1)",
                      transition: "all 0.7s ease",
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: "#1e3a5f", fontFamily: "sans-serif" }}>{m.year.slice(2)}</span>
                  </div>
                  <div className="pt-2">
                    <div className="font-bold text-lg" style={{ color: "#1e3a5f" }}>{m.year}</div>
                    <div className="text-gray-500 mt-1 text-sm leading-relaxed max-w-xl" style={{ fontFamily: "sans-serif" }}>{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CAMPUS PLACES ════════════ */}
      <section id="campus" className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-amber-600" style={{ fontFamily: "sans-serif" }}>On Campus</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <h3 className="text-5xl font-bold text-gray-900">
              A Place Worth <span style={{ color: "#1e3a5f" }}>Exploring</span>
            </h3>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shrink-0 border"
              style={{ backgroundColor: "#f0f4ff", borderColor: "#c7d2fe", color: "#3730a3", fontFamily: "sans-serif" }}
            >
              <span>📍</span>
              <span>Westmore County — 340 km from capital</span>
            </div>
          </div>
          <p className="text-gray-400 mb-10 max-w-xl" style={{ fontFamily: "sans-serif" }}>
            342 acres of heritage and modernity. Tap any card to learn more about each location.
          </p>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {campusSpots.map((spot, i) => (
              <CampusCard
                key={spot.name}
                spot={spot}
                isActive={activeCard === i}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              />
            ))}
          </div>

          {/* Expanded panel */}
          {activeCard !== null && (
            <div
              className="mt-8 rounded-2xl overflow-hidden flex flex-col md:flex-row border"
              style={{
                backgroundColor: campusSpots[activeCard].light,
                borderColor: campusSpots[activeCard].accent + "44",
                boxShadow: `0 8px 32px -8px ${campusSpots[activeCard].accent}22`,
              }}
            >
              <div className="md:w-2/5 relative" style={{ minHeight: 240 }}>
                <img
                  src={campusSpots[activeCard].image}
                  alt={campusSpots[activeCard].name}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="p-8 flex flex-col justify-center md:w-3/5">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white tracking-widest uppercase"
                    style={{ backgroundColor: campusSpots[activeCard].accent, fontFamily: "sans-serif" }}
                  >
                    {campusSpots[activeCard].tag}
                  </span>
                  <span className="text-xs text-gray-500" style={{ fontFamily: "sans-serif" }}>{campusSpots[activeCard].hours}</span>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-gray-900">{campusSpots[activeCard].name}</h4>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "sans-serif" }}>{campusSpots[activeCard].desc}</p>
                <button
                  onClick={() => setActiveCard(null)}
                  className="mt-6 self-start text-xs tracking-widest uppercase transition-colors"
                  style={{ color: campusSpots[activeCard].accent, fontFamily: "sans-serif" }}
                >
                  ✕ Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ════════════ GALLERY STRIP ════════════ */}
      <section className="py-6 border-y border-gray-100 bg-gray-50">
        <p className="text-xs text-gray-400 tracking-widest uppercase px-8 mb-4" style={{ fontFamily: "sans-serif" }}>Campus Gallery</p>
        <div className="flex gap-3 overflow-x-auto px-8 pb-2" style={{ scrollbarWidth: "none" }}>
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-52 h-36 rounded-xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-colors"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              <img
                src={src}
                alt={`Campus ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ PEOPLE ════════════ */}
      <section id="people" className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-xs tracking-[0.3em] uppercase font-semibold text-amber-600" style={{ fontFamily: "sans-serif" }}>Our People</span>
          </div>
          <h3 className="text-5xl font-bold mb-12 text-gray-900">
            Voices of <span style={{ color: "#1e3a5f" }}>Harrington</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all bg-white"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}
              >
                <div className="text-4xl leading-none mb-4" style={{ color: "#b45309" }}>"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 italic" style={{ fontFamily: "sans-serif" }}>{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: t.bg, fontFamily: "sans-serif" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900 text-sm font-semibold" style={{ fontFamily: "sans-serif" }}>{t.name}</div>
                    <div className="text-gray-400 text-xs" style={{ fontFamily: "sans-serif" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="border-t border-gray-100 px-8 md:px-20 py-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="rounded-full p-1 flex items-center justify-center text-white font-bold text-sm bg-[#1e3a5f]">ISM</div>
              <span className="font-bold text-gray-900 font-serif">IIT ISM Dhanbad</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 text-xs text-gray-400 tracking-widest uppercase">
            {["Admissions", "Research", "Alumni", "Contact"].map((link) => (
              <span key={link} className="hover:text-amber-600 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}