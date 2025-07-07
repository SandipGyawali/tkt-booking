"use client";

import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { Button } from "./ui/Button";

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: string;
  duration: string;
  director: string;
  cast: string[];
  description: string;
  trailerUrl: string;
  releaseDate: string;
}

interface TrailerCarouselProps {
  movies: Movie[];
  onClose: () => void;
}

export function TrailerCarousel({ movies, onClose }: TrailerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentMovie = movies[currentIndex];

  const nextMovie = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
    setIsPlaying(false);
  };

  const prevMovie = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
    setIsPlaying(false);
  };

  const goToMovie = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="border-b-4 border-black p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Play className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-black">MOVIE TRAILERS</h2>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-transparent border-black"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-80px)]">
          {/* Main Trailer Area */}
          <div className="flex-1 p-6 space-y-6">
            {/* Video Player */}
            <div className="relative aspect-video bg-black border-4 border-black rounded-lg overflow-hidden group">
              <img
                src={currentMovie.trailerUrl || "/placeholder.svg"}
                alt={`${currentMovie.title} trailer`}
                className="w-full h-full object-cover"
              />
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-2xl"
                  >
                    <Play className="h-10 w-10 text-white ml-1" />
                  </button>
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={prevMovie}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cyan-400 border-2 border-black rounded-full flex items-center justify-center hover:shadow-none hover:translate-y-1 transition-all duration-200 shadow-md opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </button>
              <button
                onClick={nextMovie}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-cyan-400 border-2 border-black rounded-full flex items-center justify-center hover:shadow-none hover:translate-y-1 transition-all duration-200 shadow-md opacity-80 hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Movie Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">
                    {currentMovie.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-purple-400 border-2 border-black rounded-lg px-3 py-1 font-bold text-black">
                      {currentMovie.genre}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-black">
                        {currentMovie.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{currentMovie.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentMovie.releaseDate}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{currentMovie.director}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {currentMovie.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-black">STARRING:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentMovie.cast.map((actor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#fffde8] border-2 border-black rounded-lg text-sm font-bold text-black"
                    >
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button variant="default">
                  <Play className="h-4 w-4 mr-2" />
                  BOOK TICKETS
                </Button>
                <Button variant="outline" className="bg-transparent">
                  ADD TO WATCHLIST
                </Button>
              </div>
            </div>
          </div>

          {/* Movie List Sidebar */}
          <div className="lg:w-80 border-l-4 border-black bg-gray-50 p-4 overflow-y-auto">
            <h3 className="text-lg font-bold text-black mb-4">
              ALL TRAILERS ({movies.length})
            </h3>
            <div className="space-y-3">
              {movies.map((movie, index) => (
                <button
                  key={movie.id}
                  onClick={() => goToMovie(index)}
                  className={`w-full text-left p-3 border-2 border-black rounded-lg transition-all duration-200 hover:shadow-none hover:translate-y-1 ${
                    index === currentIndex
                      ? "bg-[#fffde8] shadow-md"
                      : "bg-white shadow-md hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gray-200 border-2 border-black rounded flex items-center justify-center flex-shrink-0">
                      <Play className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-black text-sm truncate">
                        {movie.title}
                      </h4>
                      <p className="text-xs text-gray-600">{movie.genre}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-bold text-black">
                            {movie.rating}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {movie.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="bg-gray-100 border-t-4 border-black p-4 flex items-center justify-center space-x-2">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMovie(index)}
              className={`w-3 h-3 rounded-full border-2 border-black transition-all duration-200 ${
                index === currentIndex
                  ? "bg-red-500"
                  : "bg-white hover:bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
