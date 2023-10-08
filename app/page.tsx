export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold col-span-4">Love From Miguel</h1>
      <h2 className="text-3xl font-semibold">A Collection Close to My Heart</h2>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* ... existing code ... */}

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_TedFmvfCYo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-4 mt-8">
          <p className="text-lg">
            I created this collection to share my love for Vero & Sam. I hope you enjoy
            it as much as I do!
          </p>
        </div>
      </div>
    </main>
  )
}


