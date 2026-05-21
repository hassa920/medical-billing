export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-wider text-cyan-400">
          CYBERMED AI
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#">Features</a>
          <a href="#">AI Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <button className="px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm hover:bg-cyan-400/20 transition-all">
          Get Started
        </button>

      </div>
    </nav>
  );
}