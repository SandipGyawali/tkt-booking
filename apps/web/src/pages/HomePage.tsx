import ContributionCard from "@/components/ContributionCard";
import { RetroFAQ } from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewLetter";
import { TrailerCarousel } from "@/components/TrailerCarousel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import ProtectedLayout from "@/layouts/ProtectedLayout";
import { Clock, Film, Play, Star } from "lucide-react";
import { useState } from "react";

const featuredMovies = [
  {
    title: "CYBER PUNK 2099",
    genre: "Sci-Fi Action",
    rating: "8.9",
    duration: "2h 15m",
    image: "/placeholder.svg?height=400&width=300",
    showTimes: ["2:00 PM", "5:30 PM", "8:45 PM"],
  },
  {
    title: "NEON NIGHTS",
    genre: "Thriller",
    rating: "8.7",
    duration: "1h 58m",
    image: "/placeholder.svg?height=400&width=300",
    showTimes: ["3:15 PM", "6:00 PM", "9:30 PM"],
  },
  {
    title: "RETRO RAIDERS",
    genre: "Adventure",
    rating: "9.1",
    duration: "2h 32m",
    image: "/placeholder.svg?height=400&width=300",
    showTimes: ["1:45 PM", "4:30 PM", "7:15 PM"],
  },
];

const trailerMovies = [
  {
    id: 1,
    title: "CYBER PUNK 2099",
    genre: "Sci-Fi Action",
    rating: "8.9",
    duration: "2h 15m",
    director: "Alex Rodriguez",
    cast: ["John Matrix", "Sarah Connor", "Neo Anderson"],
    description:
      "In a dystopian future where technology rules everything, a group of rebels fights against the corporate overlords to save humanity from digital slavery.",
    trailerUrl: "/placeholder.svg?height=400&width=700",
    releaseDate: "Dec 15, 2024",
  },
  {
    id: 2,
    title: "NEON NIGHTS",
    genre: "Thriller",
    rating: "8.7",
    duration: "1h 58m",
    director: "Maria Santos",
    cast: ["Jake Hunter", "Lisa Stone", "Mike Steel"],
    description:
      "A detective navigates through the neon-lit streets of a crime-ridden city to solve a series of mysterious murders that lead to a conspiracy.",
    trailerUrl: "/placeholder.svg?height=400&width=700",
    releaseDate: "Dec 22, 2024",
  },
  {
    id: 3,
    title: "RETRO RAIDERS",
    genre: "Adventure",
    rating: "9.1",
    duration: "2h 32m",
    director: "Tommy Arcade",
    cast: ["Max Power", "Luna Star", "Rex Thunder"],
    description:
      "A team of unlikely heroes embarks on an epic quest through different retro video game worlds to save the digital universe from corruption.",
    trailerUrl: "/placeholder.svg?height=400&width=700",
    releaseDate: "Jan 5, 2025",
  },
  {
    id: 4,
    title: "PIXEL WARRIORS",
    genre: "Action Comedy",
    rating: "8.5",
    duration: "2h 8m",
    director: "Steve Bit",
    cast: ["Chris Joystick", "Amy Button", "Dan Controller"],
    description:
      "When classic arcade characters come to life, they must team up to defeat a virus threatening to destroy all video games forever.",
    trailerUrl: "/placeholder.svg?height=400&width=700",
    releaseDate: "Jan 12, 2025",
  },
  {
    id: 5,
    title: "SYNTHWAVE CITY",
    genre: "Drama Sci-Fi",
    rating: "9.3",
    duration: "2h 25m",
    director: "Neon Dreams",
    cast: ["Ryan Synth", "Violet Wave", "Chrome Steel"],
    description:
      "In a city where music controls reality, a young DJ discovers they have the power to reshape the world through their electronic beats.",
    trailerUrl: "/placeholder.svg?height=400&width=700",
    releaseDate: "Jan 19, 2025",
  },
];

function Home() {
  const [showTrailerCarousel, setShowTrailerCarousel] = useState(false);

  return (
    <ProtectedLayout>
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-[#fffde8] py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 h-[500px]">
            {/* start */}

            <div className="mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                      BOOK YOUR
                      <span className="block bg-black w-fit text-white px-2">
                        MOVIE TICKETS
                      </span>
                      <span className="block">IN RETRO STYLE!</span>
                    </h1>
                    <p className="text-lg text-gray-700 max-w-md">
                      Experience cinema like never before. Book tickets for the
                      latest blockbusters with our retro-themed booking system.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default" color="">
                      <Play className="h-5 w-5 mr-2" />
                      BOOK TICKETS NOW
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent"
                      onClick={() => setShowTrailerCarousel(true)}
                    >
                      <Film className="h-5 w-5 mr-2" />
                      WATCH TRAILERS
                    </Button>
                  </div>

                  <div className="flex gap-10 pt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">500+</div>
                      <div className="text-sm text-gray-600">MOVIES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">50+</div>
                      <div className="text-sm text-gray-600">THEATERS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">1M+</div>
                      <div className="text-sm text-gray-600">
                        HAPPY CUSTOMERS
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="border-4 border-black rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white border-2 border-black rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-black">
                          NOW SHOWING
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold">9.2</span>
                        </div>
                      </div>
                      <div className="aspect-video bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center">
                        <Play className="h-12 w-12 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-black">
                          CYBER PUNK 2099
                        </h3>
                        <p className="text-sm text-gray-600">
                          Sci-Fi Action • 2h 15m
                        </p>
                      </div>
                      <Button variant="default" className="w-full">
                        BOOK NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* end */}

            {/* start */}

            {/* end */}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                NOW SHOWING
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Catch the latest blockbusters in our retro-themed theaters with
                state-of-the-art sound and projection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMovies.map((movie, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-[3/2] bg-gray-200 border-b-2 border-black relative overflow-hidden">
                    <img
                      src={
                        "https://img.freepik.com/free-psd/acting-agency-template-landing-page_23-2148797778.jpg?semt=ais_hybrid&w=740"
                      }
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 border-2 border-black rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-black fill-current" />
                      <span className="text-sm font-bold text-black">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        {movie.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {movie.genre} • {movie.duration}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Show Times:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {movie.showTimes.map((time, timeIndex) => (
                          <span
                            key={timeIndex}
                            className="px-3 py-1 bg-[#fffde8] border-2 border-black rounded-lg text-sm font-bold text-black"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="default" className="w-full">
                      BOOK TICKETS
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <RetroFAQ />
        </section>

        {/* <ContributionCard /> */}
        <NewsLetter />
      </main>
      <Footer />

      {/* Trailer Carousel Modal */}
      {showTrailerCarousel && (
        <TrailerCarousel
          movies={trailerMovies}
          onClose={() => setShowTrailerCarousel(false)}
        />
      )}
    </ProtectedLayout>
  );
}

export default Home;
