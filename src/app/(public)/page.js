import MainLayout from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="glass-card rounded-3xl p-10 max-w-4xl w-full">

          <span className="text-cyan-400 uppercase tracking-widest text-xs">
            AI HEALTHCARE PLATFORM
          </span>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            Futuristic Healthcare Infrastructure
          </h1>

          <p className="text-white/60 mt-6 text-lg max-w-2xl">
            AI-powered healthcare ecosystem with advanced analytics,
            automation, and cybernetic workflows.
          </p>

        </div>

      </section>

    </MainLayout>
  );
}