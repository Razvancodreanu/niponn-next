export default function Home() {
  return (
    <main className="p-8 bg-white text-gray-900">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Niponn General Company
      </h1>
      <p className="text-xl text-center mb-10 text-gray-700">
        Experiență. Precizie. Încredere.
      </p>

      <section className="max-w-4xl mx-auto space-y-6">
        <p className="text-lg">
          Suntem o companie românească specializată în confecții metalice și lucrări de construcții civile și industriale.
          Realizăm garduri, balustrazi, porți, scări și structuri metalice personalizate, cu atenție la detalii și durabilitate.
        </p>
        <p className="text-lg">
          Lucrăm cu o echipă dedicată și folosim materiale de calitate superioară pentru a livra rezultate care rezistă în timp.
          Fiecare proiect este tratat cu seriozitate, indiferent de dimensiune.
        </p>
        <p className="text-lg">
          Misiunea noastră este să construim cu responsabilitate, să oferim soluții eficiente și să menținem standarde înalte
          în tot ceea ce facem.
        </p>
      </section>

      <div className="mt-12 text-center">
        <a href="/servicii" className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
          Vezi toate serviciile
        </a>
      </div>
    </main>
  );
}