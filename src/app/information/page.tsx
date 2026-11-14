import { schedule } from "@/lib/content";

export default function Information() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Event Information</h1>
      <p className="mt-2 text-sm">Sample schedule for layout preview. Confirmed event details will replace these entries.</p>
      <div className="mt-8 grid gap-4">
        {schedule.map((item) => (
          <article key={item.title} className="rounded border p-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm">{item.date}</p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium">Time</dt>
                <dd>{item.startTime}–{item.endTime}</dd>
              </div>
              <div>
                <dt className="font-medium">Location</dt>
                <dd>{item.location}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </main>
  );
}
