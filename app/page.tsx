export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        {/* Video Container */}
        <div className="video-container rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_TedFmvfCYo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <div className="text-container p-4">
          <h2 className="text-3xl font-semibold">A Collection Close to My Heart</h2>
          <p className="mt-2 text-lg">
            This video series is a special gift for my sister, Sam, Veronica, and Sam. 
            I'm grateful for their generosity and hospitality.
          </p>
          <p className="mt-2 text-lg">
            Thank you for letting me stay at your home and for being there during the birth of Vero.
          </p>
        </div>
      </div>
    </main>
  )
}
