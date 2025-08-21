export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      <main className="backdrop-blur-md bg-white/70 p-10 rounded-xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-900 tracking-tight">
          Niponn General Company
        </h1>
        <p className="text-xl text-center mb-8 text-gray-700 italic">
          Experiență. Precizie. Încredere.
        </p>

        <section className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p>
            Suntem o companie românească specializată în confecții metalice și lucrări de construcții civile și industriale.
            Realizăm garduri, balustrăzi, porți, scări și structuri metalice personalizate, cu atenție la detalii și durabilitate.
          </p>
          <p>
            Lucrăm cu o echipă dedicată și folosim materiale de calitate superioară pentru a livra rezultate care rezistă în timp.
            Fiecare proiect este tratat cu seriozitate, indiferent de dimensiune.
          </p>
          <p>
            Misiunea noastră este să construim cu responsabilitate, să oferim soluții eficiente și să menținem standarde înalte
            în tot ceea ce facem.
          </p>
        </section>

        <div className="mt-10 text-center">
          <a href="/servicii" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition font-semibold shadow-md">
            Vezi toate serviciile
          </a>
        </div>
      </main>
    </div>
  );
}
