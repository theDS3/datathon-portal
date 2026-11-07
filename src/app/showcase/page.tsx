import { gallery, projects } from "@/lib/content";

export default function Showcase() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">Showcase</h1>

      <h2 className="mt-10 text-xl font-semibold">Gallery</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video rounded bg-gray-200" />
            ))
          : gallery.map((src) => (
              <img key={src} src={src} alt="" className="aspect-video w-full rounded object-cover" />
            ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">Projects</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded border p-4">
            <div className="aspect-video rounded bg-gray-200" />
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-xs">{p.team}</p>
            <p className="mt-2 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <span key={t} className="rounded bg-gray-100 px-2 py-0.5 text-xs">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}