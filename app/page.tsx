import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-xl px-6 py-32 md:py-40">
        <header className="mb-32 md:mb-40">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-normal text-foreground/90 opacity-0 animate-reveal">
            Akshath Mangudi
          </h1>
          <p className="mt-3 text-muted-foreground/70 text-base italic leading-relaxed opacity-0 animate-reveal animate-delay-100">
            ML Systems Engineering and Interpretability
          </p>
        </header>

        <Timeline />

        <footer className="mt-24 md:mt-32 opacity-0 animate-reveal animate-delay-300">
          <a
            href="https://github.com/akshathmangudi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-s text-muted-foreground/50 hover:text-accent transition-colors duration-200"
          >
            GitHub
          </a>
        </footer>
      </div>
    </main>
  )
}
