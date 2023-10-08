export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center py-8">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-bold mb-4">Love From Miguel</h1>
        <h2 className="text-3xl font-semibold mb-4">
          A Collection Close to My Heart
          <p className="text-lg mt-2 mb-4">
            I created this collection to share my love for Vero & Sam. I hope you enjoy
            it as much as I do!
          </p>
        </h2>
        <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/_TedFmvfCYo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg mb-4"
        ></iframe>
      </div>
      <p className="text-lg mb-8">
        This is an opensource project. You can find the code <a href="https://github.com/miguelgargallo/lovefrom-miguel" className="underline text-blue-500 hover:text-blue-700">here</a>.
      </p>
    </main>
  )
}
