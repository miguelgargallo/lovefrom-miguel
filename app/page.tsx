export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center py-4 md:py-8 lg:py-12">
      <div className="flex flex-col items-center w-full px-4 md:px-0 md:w-2/3 lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">Love From Miguel</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
          A Collection Close to My Heart
          <p className="text-base sm:text-lg md:text-xl mt-2 mb-2 md:mb-4">
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
          className="rounded-lg w-full sm:w-2/3 md:w-full"
        ></iframe>
      </div>
      <p className="text-lg mb-4 md:mb-8">
        This is an opensource project. You can find the code <a href="https://github.com/miguelgargallo/lovefrom-miguel" className="underline text-blue-500 hover:text-blue-700">here</a>.
      </p>
    </main>
  )
}
